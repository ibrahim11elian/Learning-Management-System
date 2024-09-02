<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile.
     */
    public function index(){
        $user = Auth::user()->load('roles');

        if ($user->hasRole('instructor')) {
           return redirect(route('instructor.courses',[
                'user' => $user->id
            ]));
        } else if ($user->hasRole('student')) {
            Log::info('User has role: student');
            return redirect(route('student.dashboard',[
                'user' => $user->id
            ]));
        }

        return abort(404);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();
        $id = Auth::id();

        return redirect("/user/" . $id . "/settings");
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function getUserProfile()
    {
        $user = Auth::user();
        $roles = $user->roles->pluck('name');

        return response()->json([
            'user' => $user,
            'roles' => $roles,
        ]);
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RestrictedTo
{
    /**
     * The roles that the user must have to access the route.
     *
     * @var array
     */
    protected $roles = [];

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  mixed  ...$roles
     *
     */
    public function handle(Request $request, Closure $next,...$roles): Response
    {
        $this->roles = $roles;

         if (! $this->hasAccess($request)) {
            return abort(401);
        }

        return $next($request);
    }


    /**
     * Check if the user has access to the route.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function hasAccess(Request $request)
    {
        $user = $request->user();

        // Check if the user has any of the required roles
        return $user && in_array($user->role, $this->roles);
    }
}

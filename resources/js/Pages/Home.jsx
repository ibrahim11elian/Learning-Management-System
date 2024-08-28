import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <Authenticated>
            <Head title="Home" />

            <Hero />
        </Authenticated>
    );
};
export default Home;

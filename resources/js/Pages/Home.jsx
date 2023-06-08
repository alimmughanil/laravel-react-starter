import Guest from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <Guest>
            <Head title="ETP Forum" />
            <div className="flex flex-col items-center justify-center">
                <p className="text-2">Selamat datang</p>

            </div>
        </Guest>
    );
}

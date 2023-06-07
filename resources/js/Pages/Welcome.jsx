import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col items-center justify-center min-h-screen gap-2">
                <p>Selamat datang</p>
                <div className="flex gap-4">
                    {auth.user ? (
                        <Link
                            href={"/dashboard"}
                            className="btn btn-primary btn-sm"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={"/login"}
                                className="btn btn-primary btn-sm"
                            >
                                Log in
                            </Link>

                            <Link
                                href={"/register"}
                                className="btn btn-primary btn-sm btn-outline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

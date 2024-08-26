import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="relative overflow-hidden">
                <Navbar />

                {children}
                <Footer />

            </main>
        </>
    );
}

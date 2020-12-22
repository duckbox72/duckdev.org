import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/about">
                <a>About </a>
            </Link>
            -
            <Link href="/counter">
                <a> Counter</a>
            </Link>
        </div>
    )
}
export default Home
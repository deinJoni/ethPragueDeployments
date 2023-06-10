import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router'
import { Layout } from "../../features/Layout";
import { useIPFS } from "src/features/peerlocal/hooks/usePeerLocal";

const Listing: NextPage = () => {
    const router = useRouter()
    const ifps = useIPFS({ ipfsHash: "QmNc9hDnhEMXXzRaxY6Q8ag6wa39GFf3gezSyPTgoxB2Wb?_gl=1*64u9hp*rs_ga*MTEyMzc3MTgxMS4xNjg2MzExMzI1*rs_ga_5RMPXG14TE*MTY4NjM0NzYzOC4yLjEuMTY4NjM0OTM3NC42MC4wLjA" })
    console.log(ifps)
    const listing = {
        "name": "name7",
        "available": true,
        "availability": "6/5 - 7/8",
        "img": "https://placeholder.pics/svg/300",
        "description": "This is 1 description, ja",
        "pickup": "afternoon",
        "deposit": 200,
        "deposit_coin": "GOH"
    }
    return (
        <>
            <Head>
                <title>Welcome Personal Page</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="card w-96 bg-base-100 min-h-[90%] shadow-xl">
                    <div className="container flex flex-col items-center justify-center gap-2 px-4 py-5 ">
                        <figure><img src={listing.img} alt={listing.name} /></figure>
                        <h3 className="text-accent">{router.query.listing_id}</h3>
                        <p className="mt-5">{listing.description}</p>
                        <div className="flex flex-row">
                            <Link className="btn btn-neutral" href={"/market"}>Back</Link>
                            <Link className="btn btn-primary" href={"/market"}>Borrow for {listing.deposit} {listing.deposit_coin}</Link>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Listing;
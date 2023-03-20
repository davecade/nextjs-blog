import { useState } from "react";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

function Header({ title }) {
    return (
        <Link href="/posts/first-post">{title ? title : "Default title"}</Link>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

function HomePage({ allPostsData }) {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <Layout home>
            <Header title="Develop. Preview. Ship. Dave is cool. 🚀" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>

            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export default HomePage;

// https://nextjs.org/learn/basics/dynamic-routes

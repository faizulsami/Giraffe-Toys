import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <h2>This is Blog</h2>
        </div>
    );
};

export default Blog;
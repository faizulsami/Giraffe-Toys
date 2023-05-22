import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <div className='m-3 py-5'>
                <h1 className='text-2xl py-2 active'>
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p className='font-semibold'>
                    Access Token: An access token is a credential that is used to access protected resources on behalf of a user or an application.
                    <br />
                    Refresh Token: A refresh token is a long-lived credential used to obtain a new access token after the previous one has expired. Refresh tokens are typically associated with a specific user or application and are securely stored on the client-side. When the access token expires, the client sends the refresh token to the server to request a new access token. The server verifies the refresh tokens validity and issues a fresh access token, allowing the client to continue accessing protected resources without requiring the user to reauthenticate.
                    <br />
                    Uncontrolled components are typically HTML form elements like input, textarea, and select, while controlled components are custom form elements like dropdowns, checkboxes, and radio buttons.
                </p>
                <p>Cookies: Access tokens and refresh tokens can be stored as secure HTTP-only cookies. </p>
                <p>Local Storage or Session Storage: Access tokens and refresh tokens can be stored in the browsers local storage or session storage.</p>
                <p>Secure Storage: For mobile or desktop applications, access tokens and refresh tokens can be securely stored in the devices secure storage mechanisms, such as Keychain on iOS or KeyStore on Android.</p>
            </div>
            <div className='m-3 py-5'>
                <h1 className='text-2xl py-2 active'>
                    Compare SQL and NoSQL databases?
                </h1>
                <p className='font-semibold'>
                    NoSQL databases are ideal for handling large-scale, rapidly changing, and unstructured data. They are commonly used in web applications, real-time analytics, content management systems, and applications dealing with varied data formats like JSON or XML.

                    It's important to note that SQL and NoSQL databases are not mutually exclusive, and both have their strengths and weaknesses. The choice between SQL and NoSQL depends on the specific requirements of your application, the nature of the data you're working with, scalability needs, and the desired query flexibility.
                </p>
            </div>
            <div className='m-3 py-5'>
                <h1 className='text-2xl py-2 active'>What is express js? What is Nest JS</h1>
                <p className='font-semibold'>
                    Express.js and Nest.js are both web application frameworks for Node.js, but they have different design philosophies and approaches to building web applications.
                    <br />
                    Express.js:
                    <br />
                    Express.js is a minimalistic and lightweight web framework for Node.js. It provides a simple, unopinionated, and flexible approach to building web applications and APIs. With Express.js, you have a lot of freedom and control over how you structure your application.
                </p>
                <p className='font-semibold'>
                    Nest.js:
                    <br />
                    Nest.js is a progressive, opinionated, and full-featured web application framework for Node.js. It is built with a modular and scalable architecture inspired by Angular (a popular frontend framework). Nest.js focuses on providing a structured and organized way to build server-side applications.
                </p>
            </div>
            <div className='m-3 py-5'>
                <h1 className='text-2xl py-2 active'>What is MongoDB aggregate and how does it work?</h1>
                <p className='font-semibold'>
                    In MongoDB, the aggregate operation is a powerful and flexible way to perform complex data processing and analysis tasks on the data stored in a collection. It allows you to transform, filter, group, and analyze data using a pipeline of stages.
                    <br />
                    The aggregate operation takes an array of pipeline stages as input. Each stage performs a specific operation on the data and passes the modified data to the next stage in the pipeline.
                </p>
            </div>
        </div>
    );
};

export default Blog;
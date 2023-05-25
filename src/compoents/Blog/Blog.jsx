import useTitle from "../hooks/useTitle";


const Blog = () => {
    useTitle('Blog')
    return (
        <main className="mx-5 my-10 md:mx-16 md:my-16 lg:mx-36 lg:my-20">
            <h1 className="text-2xl font-bold text-[#987654]">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className="text-gray-600 mt-3 mb-5"><span className="font-semibold">Ans: </span>
                Access tokens and refresh tokens are used in authentication and authorization protocols like OAuth 2.0.<br></br>
                An access token is a credential that grants a client application access to protected resources. Its issued after successful authentication and has a limited lifespan.<br></br>
                A refresh token is a long-lived credential used to obtain a new access token when the current one expires. It eliminates the need for re-authentication.<br></br>
                To ensure security, store tokens securely on the client side. Options include server-side sessions, databases, or secure storage mechanisms like HTTP-only cookies or encrypted local storage.<br></br>
                Protect tokens from unauthorized access by using secure channels, token expiration, revocation, and secure storage measures.
            </p>
            <h1 className="text-2xl font-bold text-[#987654]">2. Compare SQL and NoSQL databases?</h1>
            <p className="text-gray-600 mt-3 mb-5"><span className="font-semibold">Ans: </span>
                <br></br>SQL databases:
                <div className="list-disc">
                    <li>Structured data model with tables and predefined schemas</li>
                    <li>Rigid schema that requires altering table structure for schema changes</li>
                    <li>Vertical scalability</li>
                    <li>SQL query language for complex queries and joins</li>
                    <li>ACID compliance for data integrity and transactional consistency</li>
                </div>

                <br></br>NoSQL databases:
                <div className="list-disc">
                    <li>Various data models (key-value, document, columnar, graph)</li>
                    <li>Flexible or schema-less structure</li>
                    <li>Horizontal scalability</li>
                    <li>Query languages specific to the data model</li>
                    <li>Less emphasis on ACID compliance, prioritizing scalability and performance.</li>
                </div>
            </p>
            <h1 className="text-2xl font-bold text-[#987654]">3. What is express js? What is Nest JS?</h1>
            <p className="text-gray-600 mt-3 mb-5"><span className="font-semibold">Ans: </span>
                Express.js: Its a lightweight web application framework for Node.js that simplifies the process of building web applications and APIs.<br></br>
                Nest.js: Its a progressive Node.js framework that adds structure and organization to applications built on top of Express.js. It enhances code readability and maintainability, making it suitable for building scalable server-side applications.
            </p>
            <h1 className="text-2xl font-bold text-[#987654]">4. What is MongoDB aggregate and how does it work?</h1>
            <p className="text-gray-600 mt-3 mb-5"><span className="font-semibold">Ans: </span>
                MongoDBs aggregate function is used for advanced data analysis and aggregation operations. It works by applying a sequence of stages to the data stored in a collection. Each stage performs a specific operation on the data and passes the modified data to the next stage. The final stage produces the result of the aggregate operation. It allows for powerful data manipulation and extraction.</p>
        </main>
    );
};

export default Blog;
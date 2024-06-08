import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

interface IGql {
    children: React.ReactNode
}

export default function GraphqlContext(props: IGql) {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "http://localhost:4000"
    })
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    );
}
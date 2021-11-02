import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout>
            <p>Hello contact me on <Link to="https://www.twitter.com">twitter</Link></p>
        </Layout>
    )
}

export default Contact

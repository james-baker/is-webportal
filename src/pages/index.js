import React from "react"
import Layout from "../components/layout"
import GlobalCSS from "../styles/global.module.css"

export default function Home() {
  return <Layout>
    <div className={GlobalCSS.centerChildren}>Hello world!</div>
    </Layout>
}

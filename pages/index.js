import { server } from '../config'
import Head from 'next/head'
import CambridgePg from "../component/Cambridge/CambridgePg";
import FooterComp from "../component/FooterComp/FooterComp";
import Navhome from "../component/NavHeader/Navhome";
import Whatsapp from "../component/Whatsapp/Whatsapp";


export default function Home({ materialsite }) {
  return (
    <>
      <Head>
        <title>Cambridge International | Delhi Public School Mahendrahills</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Whatsapp />
      <Navhome />
      <CambridgePg></CambridgePg>
      <FooterComp></FooterComp>
    </>
  )
}
export async function getStaticProps() {
  // const res = await fetch("https://dpsv2.vercel.app/api")
  // const materialsite = await res.json()
  // if (!materialsite) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      materialsite: [],
    },

  }

}
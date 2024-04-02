import "@/styles/global.css"

import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { Loading } from "@/components/loading"

import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium
} from "@expo-google-fonts/roboto"

export default function Layout(){
  const[fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium
  })

  return(
    <>
      <StatusBar style="light"/>
      {fontsLoaded ? <Slot /> : <Loading />}
    </>

  )
}
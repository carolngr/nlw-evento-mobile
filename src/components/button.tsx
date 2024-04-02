import {Text, TouchableOpacity } from "react-native";

type Props = {
  title?: string
}

export function Button({ title}: Props){
  return(
    <TouchableOpacity className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg">
      <Text className="text-green-500 text-base font-bold uppercase">{title}</Text>
    </TouchableOpacity>
  )
}
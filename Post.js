import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AvatarPost from "./AvatarPost";
import { FontAwesome } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

let names = [
  "deadofwrite",
  "inkandfable",
  "true.living",
  "weworewhat",
  "chillhouse",
  "iamwellandgood",
  "loversland",
  "nitch",
  "wherearetheavocados",
  "sincerelyjules",
  "babynative",
  "thedad",
  "betches",
  "wearelivingart",
  "diet_prada",
  "yourgirlmax",
  "drunkbetch",
  "collectiveworld",
  "biancachandon",
  "americanfailure",
  "havelesstravelmore",
  "wolfcubwolfcub",
  "velvetcanyon",
  "girlwithnojob",
  "rookiemag",
  "bigsecret",
  "creaturesofcomfort",
  "lusttforlife",
  "apartmenttherapy",
  "plantifulsoul",
  "therow",
  "doyoutravel",
  "thoughtcatalog",
  "satiregram",
  "farfetch",
];

const textos = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit. In vitae cursus velit. Donec ornare lectus nec mi varius",
  "Sit amet feugiat ante sollicitudin. Vivamus aliquam arcu a justo efficitur condimentum. Cras mollis rutrum diam id dictum. Cras venenatis justo massa, sed posuere lectus rhoncus a. Nulla consectetur dolor a arcu dapibus, in gravida metus aliquet. Cras nulla est",
  "Mollis vel tempor egestas, sagittis vehicula sem. Praesent molestie eu purus eget tincidunt. Donec convallis quam a velit dictum viverra. Duis sit amet tellus porta, suscipit magna ac, dapibus odio. Donec dictum eros ante, sit amet egestas dolor volutpat quis. Suspendisse eu dolor pellentesque, aliquam lectus eget, malesuada ipsum. Praesent gravida mi eu consequat pulvinar. Suspendisse bibendum arcu a urna luctus, a pharetra est imperdiet. Praesent interdum quam eget ante facilisis molestie.",
  "Morbi egestas ut lectus ac vestibulum. Nullam mollis tellus viverra metus porttitor, at sollicitudin tellus mollis. Suspendisse ac mauris vel mi faucibus ultrices. Fusce varius nisl mi. Nam fringilla vestibulum maximus. Ut lobortis at sapien sit amet commodo. Proin venenatis, lorem congue malesuada tempor, est velit condimentum arcu,",
  "In mattis est felis id est",
  "Vivamus dignissim, magna eget suscipit ullamcorper, nisi lectus pretium turpis, at blandit eros nibh et est. Etiam molestie vulputate ligula, eu facilisis nisi sollicitudin in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante nibh, iaculis quis dui eget, finibus venenatis urna. Etiam eget lorem vehicula ex vehicula eleifend nec in augue.",
  "Quisque eu gravida turpis. Aliquam viverra condimentum ipsum vel ullamcorper. Nullam urna ex, luctus eu nisl in, faucibus sagittis neque. Nam vestibulum sapien vitae nulla aliquet gravida. Nam mollis tempor quam.",
  "Phasellus sit amet augue vestibulum, gravida diam ut, interdum sem. Nullam eget lectus sit amet est dapibus molestie. Vivamus non pellentesque est, ut dapibus ex. Aliquam porttitor consectetur nulla, ac auctor metus laoreet non. Morbi at massa at lectus ullamcorper fermentum. Morbi malesuada dignissim odio, sit amet vehicula lectus rutrum at. Aliquam et tristique mauris, vitae fringilla mi. Vestibulum efficitur blandit vestibulum",
  "Etiam non ex bibendum, accumsan nunc sed, rhoncus tortor. Fusce imperdiet tellus eu porttitor commodo. Cras ac justo rhoncus, maximus orci tempus",
  "Facilisis libero.Nullam turpis quam, congue ut commodo et, pulvinar semper elit.Etiam varius, ipsum vitae accumsan placerat, eros justo hendrerit ipsum, sed luctus quam ex eget odio.Sed fringilla magna ut sagittis varius.Donec sit amet nisi lacus.Pellentesque efficitur, nulla in mattis congue, elit lectus placerat arcu, eu tempus urna justo sit amet tortor.",
  "Mauris quis neque placerat, tempus erat nec, placerat ligula.",
  "Etiam sed tellus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas interdum magna nisl, eget interdum ex porta id. Suspendisse neque ante, cursus eget dapibus sit amet, efficitur non eros.",
  "Curabitur a nulla quam.Etiam rhoncus eu diam nec fringilla.Etiam nec commodo leo.Phasellus venenatis quis neque in consequat.Phasellus egestas sapien elit, ut mattis nunc laoreet sit amet.Curabitur in consectetur metus.Mauris sit amet venenatis odio.Ut neque nulla, interdum vitae blandit quis, bibendum eget ante.Donec ac massa non risus ultrices facilisis.In hac habitasse platea dictumst.Nunc eget neque mattis, semper est malesuada, faucibus justo.Integer auctor rhoncus maximus.",
  "Sed suscipit blandit mattis. Sed pretium ex vitae consectetur pulvinar. Sed commodo nunc sit amet ante aliquam, rutrum aliquam quam semper. Cras suscipit libero sed sapien ullamcorper suscipit. Duis fringilla sapien a placerat ultrices. Aliquam blandit velit mi, ut euismod metus commodo ut. Fusce congue lacus dapibus pharetra viverra. Sed ac ante leo.",
  "Maecenas et commodo augue, non mattis leo.Pellentesque consectetur nunc non elit aliquam aliquam.Mauris ut aliquam ipsum.Morbi imperdiet magna a scelerisque auctor.Maecenas mauris ligula, maximus a turpis et, placerat placerat massa.Vestibulum ut mi pellentesque, viverra erat ac, ultrices dolor.",
  "Praesent accumsan consectetur risus, at dapibus lorem condimentum vel. Praesent aliquam, urna vel egestas aliquam, ex ex interdum risus, eget faucibus mi enim non quam. Cras eu pulvinar justo, a suscipit felis.",
  "Curabitur vehicula turpis eros, placerat ultricies neque volutpat a.Nam molestie accumsan orci ac aliquam.Duis tempus diam eget lectus cursus accumsan.Morbi in risus nisl.Ut quis efficitur magna, vel fringilla elit.Curabitur a bibendum leo, vitae tincidunt mauris.",
  "Nulla condimentum, orci id sollicitudin sollicitudin, libero erat placerat nibh, vitae lobortis turpis ligula in purus.",
  "Vivamus ultricies mollis mauris in scelerisque.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Interdum et malesuada fames ac ante ipsum primis in faucibus.Donec id consequat massa, at sollicitudin lorem.Aenean faucibus imperdiet dolor tempus pretium.In vehicula eros consectetur, elementum leo eu, tempus leo.Nullam sagittis pellentesque lorem molestie gravida.Maecenas interdum nunc nec justo congue dignissim.",
  "Quisque posuere, odio eu congue fermentum, urna tellus tincidunt turpis, vel placerat felis ex vel lorem.Phasellus condimentum vulputate sapien, in iaculis urna efficitur non.Vivamus ut viverra nunc, vestibulum laoreet neque.Sed justo nisl, egestas in viverra sed, pharetra ac felis.Sed dolor mauris, gravida vitae venenatis id, vestibulum vel sapien.Cras nibh metus, congue ut ex eu, iaculis blandit erat.Maecenas eget quam sit amet odio mattis congue.",
  "Etiam finibus egestas risus, ac ultricies neque ornare in. Nunc ultrices purus lectus, accumsan rutrum lacus rutrum non.",
  "Etiam vitae nunc finibus, placerat tellus sit amet",
  "Luctus neque.Aliquam erat volutpat.Ut venenatis, arcu sagittis dignissim varius, sem enim condimentum nulla, ac egestas mi justo vitae turpis.Duis ac ante commodo nisi fermentum cursus nec vel elit.Cras a lacus porttitor, hendrerit diam scelerisque, tristique tellus.Ut nunc tortor, lacinia at hendrerit non, tincidunt eget risus.",
];

function NameGenerator() {
  let tamanho = names.length;
  let indice = Math.floor(Math.random() * tamanho);
  return names[indice];
}

function TextGenerator() {
  let tamanhotexto = textos.length;
  let indice = Math.floor(Math.random() * tamanhotexto);
  return textos[indice];
}

export default function Post(props) {
  let nomeaqui = NameGenerator();

  return (
    <View>
      <View style={styles.postheader}>
        <AvatarPost numero={Math.floor(100 - Math.random() * 50)} />
        <Text style={styles.headerusername}>{nomeaqui}</Text>
      </View>
      <Image
        source={{
          uri: `https://source.unsplash.com/random/${props.numero}x${props.numero}`,
        }}
        style={styles.postimage}
      />
      <View style={styles.posticons}>
        <View style={styles.iconsesquerda}>
          <TouchableOpacity style={styles.postbutton}>
            <FontAwesome name="heart-o" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postbutton}>
            <AntDesign name="message1" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postbutton}>
            <FontAwesome name="send-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={(style = styles.iconsesquerda)}>
          <TouchableOpacity style={styles.postbutton}>
            <FontAwesome name="bookmark-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.likes}>
        <Text style={styles.liketext}>
          {Math.floor(Math.random() * 1000)} likes
        </Text>
      </View>
      <View style={styles.posttexto}>
        <Text style={styles.nomedopost}>
          {nomeaqui} <Text> </Text>
          <Text style={styles.textinho}>{TextGenerator()}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postheader: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  headerusername: { marginLeft: 10, fontWeight: "bold" },
  postimage: { width: "100%", height: 300 },
  posticons: {
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  postbutton: { padding: 10 },
  iconsesquerda: { flexDirection: "row" },
  likes: { marginLeft: 10 },
  liketext: { fontWeight: "bold", marginBottom: 10 },
  nomedopost: { fontWeight: "bold", marginRight: 10 },
  posttexto: { flexDirection: "row", paddingHorizontal: 10, marginBottom: 30 },
  textinho: { fontWeight: "normal", marginLeft: 10 },
});

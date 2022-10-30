import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex1Cb, useFlex5Cb, useFlex7Cb, useFlex12Cb, useFlex13Cb, useFlex15Cb, useFlex18Cb, useFlex24Cb, useFlex25Cb, useFlex26Cb, useFlex27Cb, useFlex28Cb, useFlex29Cb, useFlex31Cb, useFlex33Cb, useFlex34Cb, useFlex37Cb, useFlex38Cb, useFlex39Cb, useFlex40Cb, useFlex41Cb, useFlex42Cb, useFlex43Cb, useFlex45Cb, useFlex46Cb, useFlex47Cb, useTextBox15Cb, useTextBox1Cb, useTextBox25Cb, useImage3Cb, useTextBox8Cb, useTextBox9Cb, useTextBox10Cb, useDropdown2Cb, useTextBox13Cb, useTextBox16Cb, useImage5Cb, useTextBox24Cb, useTextBox26Cb, useTextBox27Cb, useLink2Cb, useImage6Cb, useTextBox28Cb, useTextBox29Cb, useTextBox30Cb, useLink3Cb, useImage9Cb, useTextBox34Cb, useTextBox35Cb, useTextBox36Cb, useLink1Cb, useImage10Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useLink6Cb, useLink8Cb, useImage11Cb, useTextBox40Cb, useTextBox41Cb, useLink9Cb, useTextBox42Cb, useLink10Cb, useImage13Cb, useTextBox43Cb, useTextBox44Cb, useImage14Cb, useTextBox45Cb, useTextBox46Cb, useImage15Cb, useTextBox47Cb, useTextBox48Cb, useImage16Cb, useTextBox49Cb, useTextBox50Cb, useImage18Cb, useTextBox53Cb, useTextBox54Cb, useImage17Cb, useTextBox51Cb, useTextBox52Cb, useTextBox55Cb, useLink11Cb, useImage20Cb, useTextBox56Cb, useTextBox57Cb, useImage21Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useTextBox63Cb, useInput1Cb, useLink12Cb, useTextBox65Cb, useTextBox66Cb, useTextBox67Cb, useTextBox68Cb, useTextBox69Cb, useTextBox70Cb, useTextBox71Cb, useTextBox72Cb, useTextBox73Cb, useTextBox74Cb, useTextBox75Cb, useTextBox76Cb, useTextBox77Cb, useTextBox78Cb, useTextBox79Cb, useTextBox80Cb, useTextBox81Cb, useTextBox82Cb, useTextBox84Cb, useTextBox85Cb, useTextBox86Cb, useTextBox87Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useLink13Cb, useTextBox91Cb, useTextBox92Cb, useImage22Cb, useImage23Cb, useImage24Cb, useImage25Cb, useImage26Cb } from "../page-cbs/Home";
import "../page-css/Home.css"

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Dropdown2Props = useStore((state)=>state["Home"]["Dropdown2"]);
const Dropdown2IoProps = useIoStore((state)=>state["Home"]["Dropdown2"]);
const Dropdown2Cb = useDropdown2Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Link2Props = useStore((state)=>state["Home"]["Link2"]);
const Link2IoProps = useIoStore((state)=>state["Home"]["Link2"]);
const Link2Cb = useLink2Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Link3Props = useStore((state)=>state["Home"]["Link3"]);
const Link3IoProps = useIoStore((state)=>state["Home"]["Link3"]);
const Link3Cb = useLink3Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Link6Props = useStore((state)=>state["Home"]["Link6"]);
const Link6IoProps = useIoStore((state)=>state["Home"]["Link6"]);
const Link6Cb = useLink6Cb()
const Link8Props = useStore((state)=>state["Home"]["Link8"]);
const Link8IoProps = useIoStore((state)=>state["Home"]["Link8"]);
const Link8Cb = useLink8Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Link9Props = useStore((state)=>state["Home"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["Home"]["Link9"]);
const Link9Cb = useLink9Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Link10Props = useStore((state)=>state["Home"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["Home"]["Link10"]);
const Link10Cb = useLink10Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Link12Props = useStore((state)=>state["Home"]["Link12"]);
const Link12IoProps = useIoStore((state)=>state["Home"]["Link12"]);
const Link12Cb = useLink12Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Link13Props = useStore((state)=>state["Home"]["Link13"]);
const Link13IoProps = useIoStore((state)=>state["Home"]["Link13"]);
const Link13Cb = useLink13Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()

  return (<>
  <Flex className="p-Home Flex1" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<TextBox className="p-Home TextBox1" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<TextBox className="p-Home TextBox25" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<Flex className="p-Home Flex5" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Image className="p-Home Image3" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<TextBox className="p-Home TextBox10" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Dropdown className="p-Home Dropdown2" {...Dropdown2Props} {...Dropdown2Cb} {...Dropdown2IoProps}/>
<TextBox className="p-Home TextBox9" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox className="p-Home TextBox8" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex7" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox className="p-Home TextBox16" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox className="p-Home TextBox13" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Flex>
<TextBox className="p-Home TextBox15" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<Flex className="p-Home Flex15" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Link className="p-Home Link1" {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
<TextBox className="p-Home TextBox36" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox35" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox34" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<Image className="p-Home Image9" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
<Flex className="p-Home Flex12" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Link className="p-Home Link2" {...Link2Props} {...Link2Cb} {...Link2IoProps}/>
<TextBox className="p-Home TextBox27" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox26" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox24" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Image className="p-Home Image5" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
<Flex className="p-Home Flex13" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Link className="p-Home Link3" {...Link3Props} {...Link3Cb} {...Link3IoProps}/>
<TextBox className="p-Home TextBox30" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox29" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox28" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<Image className="p-Home Image6" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex>
<Flex className="p-Home Flex18" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Link className="p-Home Link6" {...Link6Props} {...Link6Cb} {...Link6IoProps}/>
<TextBox className="p-Home TextBox39" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox38" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox className="p-Home TextBox37" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Image className="p-Home Image10" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
<Flex className="p-Home Flex24" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Link className="p-Home Link8" {...Link8Props} {...Link8Cb} {...Link8IoProps}/>
</Flex>
<Flex className="p-Home Flex25" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Link className="p-Home Link9" {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
<TextBox className="p-Home TextBox41" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox className="p-Home TextBox40" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<Image className="p-Home Image11" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex>
<Flex className="p-Home Flex26" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Flex className="p-Home Flex27" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Image className="p-Home Image13" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox43" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-Home TextBox44" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex>
<Flex className="p-Home Flex34" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image className="p-Home Image17" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox51" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox52" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
<TextBox className="p-Home TextBox42" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<Flex className="p-Home Flex31" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image className="p-Home Image16" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox49" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Home TextBox50" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
<Flex className="p-Home Flex28" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Image className="p-Home Image14" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox45" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox className="p-Home TextBox46" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Flex>
<Flex className="p-Home Flex33" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image className="p-Home Image18" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox53" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox className="p-Home TextBox54" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Flex>
<Flex className="p-Home Flex29" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Image className="p-Home Image15" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox className="p-Home TextBox47" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox48" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex>
<Link className="p-Home Link10" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
</Flex>
<Flex className="p-Home Flex37" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Flex className="p-Home Flex39" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox className="p-Home TextBox59" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox58" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<Image className="p-Home Image21" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
<Flex className="p-Home Flex38" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox className="p-Home TextBox57" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox56" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Image className="p-Home Image20" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
<Link className="p-Home Link11" {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
<TextBox className="p-Home TextBox55" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Flex>
<Flex className="p-Home Flex40" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox className="p-Home TextBox61" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox className="p-Home TextBox60" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex>
<Flex className="p-Home Flex41" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Link className="p-Home Link12" {...Link12Props} {...Link12Cb} {...Link12IoProps}/>
<Input className="p-Home Input1" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<TextBox className="p-Home TextBox63" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox className="p-Home TextBox62" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<Flex className="p-Home Flex42" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox className="p-Home TextBox82" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<TextBox className="p-Home TextBox81" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox78" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox79" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<TextBox className="p-Home TextBox75" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox76" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Home TextBox66" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<TextBox className="p-Home TextBox72" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<TextBox className="p-Home TextBox65" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox className="p-Home TextBox67" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox68" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox className="p-Home TextBox69" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox className="p-Home TextBox70" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox71" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox className="p-Home TextBox73" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Home TextBox74" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox className="p-Home TextBox77" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox className="p-Home TextBox80" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
<Flex className="p-Home Flex43" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Link className="p-Home Link13" {...Link13Props} {...Link13Cb} {...Link13IoProps}/>
<TextBox className="p-Home TextBox89" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<TextBox className="p-Home TextBox90" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<TextBox className="p-Home TextBox87" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
<TextBox className="p-Home TextBox88" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<TextBox className="p-Home TextBox86" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<TextBox className="p-Home TextBox85" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<TextBox className="p-Home TextBox84" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex45" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<TextBox className="p-Home TextBox91" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
</Flex>
<Flex className="p-Home Flex46" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<TextBox className="p-Home TextBox92" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<Flex className="p-Home Flex47" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Image className="p-Home Image22" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<Image className="p-Home Image23" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<Image className="p-Home Image25" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<Image className="p-Home Image24" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Image className="p-Home Image26" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Flex>
</Flex>
  </>);
}

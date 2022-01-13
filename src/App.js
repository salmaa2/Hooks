
import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import NavBar from './components/Navbar';
import Rating from './components/Rating';
import SEarch from './components/SEarch';

var movies=[
  {
    id:0,
    title:"شوفلي حل",
    posterUrl:"https://m.media-amazon.com/images/M/MV5BN2Y1ODhkMTctYWVmYy00ZmNkLTgyNTYtZWQxNWY3MTVlZmFkXkEyXkFqcGdeQXVyNjk5MjA5NDM@._V1_.jpg" ,
    description:"شوفلي حل سلسلة تونسية من صنف كوميديا الموقف تبث على قناة الوطنية 2 يوميا، تقدم يوميات متساكني إحدى العمارات التي تضم عيادة الطبيب النفساني الدكتور سليمان الأبيض (كمال التواتي) ومحلّ العرّافة (آمال البكوش) التي تستغل سذاجة حرفائها لكسب مال وفير هذا إلى جانب شخصية السبوعي (سفيان الشعري) الطريفة وعديد الشخصيات الأخرى التي تساهم في صياغة الأحداث التي تنطلق من الاهتمامات اليومية للعائلة التونسية تقريبا.",
    rate :5 ,
    trailer : "https://www.youtube.com/embed/88GFHzLr65s"
  },
  {
    id:1,
    title: "يوميات إمرآة",
    posterUrl:"https://media.elcinema.com/uploads/_315x420_7034847510c50cb616462c6ca3cd8fbd3c67fd46daa88669e15deff87ec9c9bb.jpg" ,
    description:"قدم المسلسل نوعية صورة جديدة في الدراما التونسية، حيث يحكي عن يوميات مجموعة من النساء على غرار دنيا وهي شابة تونسية، وقعت في حب فهمي أما داليا فهي بنكاجية اكتشفت خيانة زوجها في حين أن علياءتتعرض للعنف من قبل زوجها، وقد توفي لكنها تتهم بقتله. ثم تتزوج كرة ثانية بعد براءتها من سيدي علي.",
    rate :4 ,
    trailer : "https://www.youtube.com/embed/Hh73EGMjVqc"
  },{
    id: 2 ,
    title:"حسابات و عقابات" ,
    posterUrl:"https://i.ytimg.com/vi/2GUTxBGegbI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOW6BGJoFoR-BwjygCLgNE7olS6g" ,
    description:"لزهر عروش عالم فذ في الصناعات الغذائية والبيولوجية طليق نجلاء وله ابنة اسمها منال، من اصل ريفي ويفوق أبو نجلاء الطيب ذكاء وثقافة لذلك سعى الطيبي ان تطلق ابنته لزهر إلى أن نجح في ذلك، ويفتك منه حضانة منال، مسلسل رائع ومشوق وممتع في نفس الوقت، شاهدوه ,",
    rate :4.5 ,
    trailer : "https://www.youtube.com/embed/_LuTxwp4Tfo"
  },{
    id: 3,
    title:"مكتوب" ,
    posterUrl:"https://i.ytimg.com/vi/A2HhKpSFBis/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzykg1bbDaUp8TpTQghjdJsbRdiQ" ,
    description:"يحكي قصة عائلة الناجي البورجوازية. المتكونة من الأم جميلة ’ محمد علي الابن الأكبر، وقد كان جميلا وحسن المظهر وزوجته سامية الذي اتضح أنه كان يخونها مع شهناز والتي تنجب له طفلة لم يستعرف بها. ومن مراد الابن الأوسط ة الطيب والحنون والعاقل ولكن لم يحالفه الحظ مع الزواج. ومن الأخ الأصغر مهدي وهو طالب بالجامعة مع ثلة من رفاقه ويقع في حب يسر السمراء ولكن أمه لم تقبل بالزواج منها بسبب التمييز العنصري الذي تملكها.",
    rate :4.5 ,
    trailer : "https://www.youtube.com/embed/DxYPBdrcbLQ"
  },{
    id: 4,
    title:"ليالي البيض" ,
    posterUrl:"https://media.elcinema.com/uploads/_640x_a95461ecdfed4df8de56f14ea2bc1842c994171b00fb7348a777b5acd8112fcf.jpg" ,
    description:"تدور احداث المسلسل حول الطمع و الجشع من طرف نادر ",
    rate :3.5 ,
    trailer : "https://www.youtube.com/embed/peheE3m5Ksc"
  },{
    id: 5,
    title:"منامة عروسية" ,
    posterUrl:"http://www.watania1.tn/sites/default/files/img_emission/mnamet%20arousia_0.jpg" ,
    description:"تدور أحداث المسلسل في ضيعة فلاحية بمنطقة نائية تعيش فيها العجوز عروسية مع حفيدها ولكن تنتظرها مشاكل كثيرة بسبب طمع أقاربها خصوصا بعد مرضها المفاجأ",
    rate :4 ,
    trailer : "https://www.youtube.com/embed/tB_3mfhqizM"
  },{
    id: 6,
    title: "الدوار",
    posterUrl: "https://i.ytimg.com/vi/z1TyocdHAPQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5pKKOskboapawL4iJEHHhQwDA2g",
    description:"الدوار مسلسل تونسي عرض في رمضان 1992 لاقى شهرة كبيرة و نجاحا واسعا و عرض في تونس و في بعض القنوات العربية.",
    rate :4 ,
    trailer : "https://www.youtube.com/embed/dGEoMVdexn0"
  },{
    id: 7,
    title: "إخوة و زمان",
    posterUrl: "http://www.watania2.tn/sites/default/files/img_emission/%D8%A7%D8%AE%D9%88%D8%A9%20%D9%88%D8%B2%D9%85%D8%A7%D9%86.jpg",
    description:"يروي المسلسل قصة عائلة تعيش في حي شعبي إذ يعيش عصام فترة مراهقة خطرة تؤدي به إلى الإنحراف لفقدانه لأمه فيجد السرقة و الهجرة الغير شرعية سبيله لنسيان مشاكله في ظل إعادة زواج أبيه من إمرأة أخرى",
    rate : 3.5 ,
    trailer : "https://www.youtube.com/embed/zXVSp9hxIL4"
  },{
    id: 8,
    title: "الخطاب على الباب" ,
    posterUrl: "https://celebrity.tn/wp-content/uploads/2021/04/El-Khottab-Al-Bab-1024x522.jpg" ,
    description:"الخطاب على الباب مسلسل تونسي عرض لأول مرة في رمضان عام 1996 في موسمه الأول، وتواصل الموسم الثاني في رمضان عام 1997 وهو من إخراج صلاح الدين الصيد وإنتاج التلفزة التونسية. يتألف المسلسل من 30 حلقة، أي 15 حلقة في كل جزء، وهو يروي أجواء الأحياء العتيقة بالعاصمة (الحومة العربي) خاصة في شهر رمضان المعظم،",
    rate : 4.5,
    trailer : "https://www.youtube.com/embed/wZtuTDbG9K0"
  },{
    id: 9,
    title:"بين الثنايا" ,
    posterUrl:"http://www.watania1.tn/sites/default/files/img_emission/feuill.jpg" ,
    description:"هو حكاية الطمع و الشجع و الرغبة في الاستحواذ بالحيلة على املاك الغير و لو كان هذا الغير من ذوي القرابة و الأيتام صور صراع كثيرا ما تكون نهايته روتينية بانتصار الخير و انهزام الشر و لو بضربة قدر.",
    rate : 3.5,
    trailer : "https://www.youtube.com/embed/mpIm8H_BWpk" 
  }
]
function App() {
 const [moviedata,setMoviedata]=useState(movies)
 const [search,setSearch]=useState('')
 const [rating,setRating]=useState('')

  return (
    <div className="App">
      <NavBar />
      <div className='header'>
       <SEarch search={search} setSearch={setSearch} />
       <Add moviedata={moviedata} setMoviedata={setMoviedata} />
       </div>
       <Rating reating={rating} setRating={setRating} />
      <MovieList moviedata={moviedata}search={search} rating={rating} />
      <Footer/>
    </div>   
  );
}

export default App;

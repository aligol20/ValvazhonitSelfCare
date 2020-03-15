/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, View, TouchableHighlight, Dimensions, AsyncStorage} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import LottieView from "lottie-react-native";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
type Props = {};
export default class Main_text extends Component {
    constructor(props) {

        super(props);
        this.props.navigator.setStyle({
            navBarTextColor: 'white',
            navBarBlur:true,
            topBarBorderColor:'red',
            navBarButtonColor: 'white',
            navBarTextFontFamily:'B Koodak',
            statusBarTextColorScheme:'light',
            statusBarColor:'#b2733a',

        });
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        this.state = {
            language:'fa',
            index:0
        };

    }
    onNavigatorEvent(event) {
        if (event.id === 'willAppear') {
            AsyncStorage.getItem('language',(err,store)=>{
                if(store){
                    console.log(store,'ddldldldldllddkfklfe')

                    this.setState({language:JSON.parse(store)})
                    switch(JSON.parse(store)) {
                        case 'fa':
                            this.setState({index : 0});
                            break;
                        case 'en':
                            this.setState({index:1});
                            break;
                        default:
                            this.setState({index : 0});

                    }
                }else {
                    AsyncStorage.setItem('language',JSON.stringify('fa'))
                }
            })
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('language',(err,store)=>{
            if(store){
                this.setState({language:JSON.parse(store)})
                switch(JSON.parse(store)) {
                    case 'fa':
                        this.setState({index : 0});
                        break;
                    case 'en':
                        this.setState({index:1});
                        break;
                    default:
                        this.setState({index : 0});

                }
            }
        })
    }

    main_text(){
        let fa = {signs:'*علائم مختلف بیماری:\n' +
                '1-گزارش توسط بیمار:\n خارش-سوزش\nترشح پنیری شکل یا ترشح آبکی غیرنرمال واژن مقاربت دردناک\n' +
                '2-مشاهده توسط پزشک:\n اریتما-پرخونی – ادما\n واژن و فرج قرمز و متورم \nپوست ترک خورده در اطراف دهانه واژن',
            reason:'*علل به وجود آمدن بیماری:\n' +
                    '1-عوامل مربوط به پاتوژن:\n کاندیدا آلبیکنس – کاندیدا گلابراتا\n' +
                    '2-عوامل مربوط به میزبان :\n' +
                    'آنتی‌ژن لوئیس :\n زنانی که حامل این ژن نیستند، در معرض خطر بیشتری برای ابتلا به عفونت کاندیدایی واژن و فرج راجعه هستند.\n' +
                    '3-عوامل پزشکی:\n ابتلا به بیماری غیر از بیماری ولوواژینیت کاندیدایی\n' +
                    'بیماری دیابت، سرطان، HIV، کم‌خونی مزمن، سایر موارد (بیماری‌های ناتوان‌کننده سیستم ایمنی بدن)\n' +
                    '4-استفاده از آنتی‌بیوتیک وسیع‌الطیف:\n' +
                    'آمپی‌سیلین- تتراسایکلین – سفالوسپورین ها\n' +
                    '5-عوامل رفتاری:\n' +
                    '* رفتارهای جنسی\n' +
                    '-عفونت کاندیدایی با شروع فعالیت جنسی افزایش می‌یابد.\n' +
                    '-مقاربت‌های خشن\n' +
                    '-تحریک جنسی در حین قاعدگی\n' +
                    '-نزدیکی‌های مکرر (7 بار یا بیشتر در هفته) قوی‌ترین عامل خطر است.\n' +
                    '*روشهای پیشگیری از بارداری:\n' +
                    '-استفاده از اسفنج پیشگیری از بارداری واژنی\n' +
                    '-استفاده از ابزار پیشگیری از بارداری داخل رحمی (IUD)\n' +
                    '-استفاده از قرض های ضد بارداری\n' +
                    '6-عوامل تغذیه‌‌ای:\n' +
                    '-مصرف دخانیات و الکل\n' +
                    '-مخمرها (نان- سرکه – آب جو)\n' +
                    '-شیرینی ها(شکر، مربا، سس سویا و...)\n' +
                    '-قارچ‌های خوراکی و پنیر و قهوه\n' +
                    '7-دوش‌های واژنی و عوامل بهداشتی:\n' +
                    '-دوش‌های واژنی مکرر\n' +
                    '-افزایش رطوبت سطح خارجی دستگاه تناسلی\n' +
                    '-لباس زیر تنگ و نایلونی\n' +
                    '-استفاده از پدهای بهداشتی در دوران قاعدگی\n' +
                    '-نگهداری طولانی مدت تامپون در واژن\n' +
                    '-کلر داخل استخرهای شنا\n' +
                    '-صابون‌های معطر، نرم کننده‌های کارخانه‌ای، سفیدکننده های شیمیایی، اسپری‌های‌خوشبوکننده\n' +
                    '8-استرس\n' +
                    '9-عوامل میکروبی :\n' +
                    '-افزایش مصرف ضد قارچی که نامناسب و مکرر بعنوان واحد درمانی کوتاه و ناکامل بکار رفته است.\n' +
                    '-افزایش مصرف برنامه‌های نگهدارنده بلند مدت ضد قارچی با هدف پیشگیری بروز مجدد در زنان\n' +
                    '-مصرف گسترده درمان کوتاه مدت به صورت خوراکی یا موضعی\n' +
                    '10-حاملگی\n' +
                    'در زنان باردار به دلیل تغییرات  هورمونی و افزایش وزن میزان ابتلا به عفونت کاندیدایی افزایش می‌یابد به ویژه در سه ماهه آخر حاملگی\n' +
                    '11-میزان تحصیلات:\n' +
                    'میزان تحصیلات به عنوان یک شاخص عمومی (به دلیل آگاهی و اطلاع بیشتر) می‌تواند باعث پیشگیری از بیماری‌ها و کنترل انواع عفونت‌ها شود.\n' +
                    '12-سن:\n' +
                    '-عفونت کاندیدایی در تمام سنین ایجاد می‌شود اما اکثر آن در سنین باروری اتفاق می‌افتد\n' +
                    '-این عارضه در دخترانی که هنوز دوران قاعدگی آنها آغاز نشده و در زنان یائسه کمتر شایع است.\n' +
                    '-برطبق مطالعه‌ی انجام شده گروه‌های سنی 28-37 سال بیشترین میزان عفونت را داشتند.\n' +
                    '-بر طبق مطالعه پژوهشگر گروه‌های سنی 26-30 سال بیشترین میزان عفونت را داشتند.\n' +
                    '13-چاقی (افزایش وزن) :\n' +
                    'عدم تهویه کافی، ابتلا به این عفونت را افزایش می‌دهد.',
            methods:'نکته اساسی در درمان موفقت‌آمیز واژینیت:\n' +
                ' 1-تشخیص صحیح واژینیت \n' +
                '2-گرفتن شرح حال دقیق می‌باشد.\n' +
                    'در صورت شک به وجود مخمرها و در موارد دشوار ازمحیط کشت نیکرسون و یاآگارسابارو استفاده می‌شود.',
            systemic:'-کتوکونازول\n' +
                    '-فلوکونازول\n' +
                    '-ایتراکونازول',
            topical:'*ایمیدازولی\n -میکوکونازول\n -کلوتریمازول\n -بوتوکونازول\n' +
                    '*تریازولی\n -تراکونازول\n' +
                    '*نیستاتین\n *اکونازول',
            plant_medicine:'درخصوص داروهای گیاهی، به دلیل تداخل دارویی حتما قبل از مصرف بایدباپزشک مربوطه مشورت شود. \n' +
                    'سیر- آب گیاه اکنیاسه\nروغن درخت چای - نعناع \n رز ماری –ویتامین C خوراکی\n شیاف واژنی ویتامین E , A \n انار – چای سبز\n عصاره دانه گریپ فروت \n آویشن شیرازی\n مرزنجوش',
            probiotic:'* اصلاح و تقویت سیستم دفاعی بدن\n' +
                    '1-ویتامین A به مقدار ۵۰۰۰ واحد در روز یا بتا-کاروتن 50.000 واحد در روز\n' +
                    '2-ویتامین C به مقدار 500 تا1000 میلی گرم 3 تا 4 بار در روز\n' +
                    '3-ویتامین های گروه اصلی گروه B هر یک 20 تا 50 میلی گرم در روز\n' +
                    '4-روی (ZN) 10 تا 15 میلی گرم در روز \n' +
                    '5-ویتامین E به مقدار 200 واحد در روز\n' +
                    '6-کاهش مصرف قند، شکر، قهوه، قطع دخانیات و الکل\n' +
                    '7-افزایش مواد غذایی باخواص آنتی‌‌بیوتیکی (سیر و پیاز)\n' +
                    '* تغییر و تعدیل فلور روده (از بین بردن منبع کاندیدا که مکانیسم اثر اصلی داروهای ضد قارچ خوراکی است) یا واژن\n' +
                    '1-خوردن روزانه 2 قاشق غذاخوری ماست غیرپاستوریزه (حاوی لاکتوباسیل)\n' +
                    '2-مصرف فرآورده‌های حاوی لاکتوباسیل (در ایران در دسترس نیست)\n' +
                    '3-دوش واژینال با ترکیبات حاوی لاکتوباسیل (یا نشستن داخل لگن آب ولرم حاوی ماست غیرپاستوریزه)\n' +
                    '4-دوش واژینال با جوش شیرین (یک قاشق چایخوری داخل لیوان و استعمال آن (باعث قلیایی شدن واژن می‌شود) 2بار در روز برای 7 تا 10 روز\n' +
                    '* درمان‌های موضعی\n' +
                    '1-دوش واژینال با بتادین 2 بار در روز به مدت 7 تا 14 روز\n' +
                    '2-کپسول اسیدبوریک (600 میلی گرم) داخل واژینال یک بار در روز به مدت 10تا 14 روز\n' +
                    '3-مالیدن ویوله دوژانسیه (باسواپ) داخل واژن یک بار در روز برای 1 تا 2 هفته یا بیشتر\n' +
                    '4-ژل شیرین بیان روزانه یک بار داخل واژن\n',
            Laser:'',
            regime:'*رژیم غذایی متعادل\n' +
                    '-رژیم غذایی کم شکر\n' +
                    '- رژیم غذایی کم مخمر (نان، سرکه، آب جو)\n' +
                    '-مصرف سیر و پیاز به دلیل خواص آنتی‌بیوتیکی\n' +
                    '-مصرف آجیل و امگا 3و امگا 6 (به دلیل اسیدهای چرب ضروری)\n' +
                    '-استفاده از فرآورده‌های پروبیوتیک\n' +
                    '-مصرف ادویه‌جات ضدقارچ (دارچین-پونه کوهی- مریم گلی – میخک)\n' +
                    '-مصرف مرکبات و سبزیجات (ویتامین A و ویتامین C)\n' +
                    '-مصرف گوشت و ماهی و فرآورده‌ های لبنی (ذخیره آهن و ویتامین B)\n' +
                    '-عدم مصرف دخانیات و الکل',
            prevention:'اقدامات پیشگیری و توصیه‌های درمانی :\n' +
                    '*اقدامات پیشگیری:\n' +
                    '1-عدم استفاده از لباس زیر نم دار و مرطوب\n' +
                    '2-انتخاب لباس زیر نرم با الیاف طبیعی مانند پنبه، کتان، ابریشم\n' +
                    '3-پرهیز استفاده از دئودورانت‌‌ها موجود در تامپون زنانه\n' +
                    '4-شستشو و ضد عفونی کردن لباس زیر با آب گرم\n' +
                    '5-اگر تحت درمان آنتی‌بیوتیک هستید و سابقه ابتلا به برفک واژن را دارید، برای درمان برفک واژن اقدام کنید.\n' +
                    '6-در مورد مسائل جنسی با همسر خودصحبت کنید.\n' +
                    '7-از پوشیدن لباس زیر تنگ و یاشلوارهای تنگ اجتناب کنید.\n' +
                    '8-خشک کردن ناحیه تناسلی\n' +
                    '9-اتو کردن لباس زیر یا قرار دادن لباس زیر نور آفتاب\n' +
                    '10-تعویض زود به زود نوار بهداشتی\n' +
                    '11-شستشو ناحیه تناسلی با آب خالی یا شوینده های ملایم\n' +
                    '12-اجتناب از نشستن در وان آب گرم و حمام‌های مکرر و وسواسی\n' +
                    '13-داشتن رژیم غذایی متعادل\n' +
                    '14-مصرف مکرر روزانه ماست و سایر مواد غذایی کمک کننده به رشد باکتری‌های مفید و مصرف پروبیوتیک‌‌ها\n' +
                    '* توصیه‌های درمانی:\n' +
                    '1-چنانچه در دوران بارداری یاشیردهی به برفک واژن مبتلاهستید، داروهای خوراکی برای شما تجویز نمیشودزیرا ممکن است بر جنین تاثیر بگذارند پس بهتر است از یک شیاف ضدبرفک مانند کلوتریمازول، اکونازول، میکونازول استفاده شود.\n' +
                    '2-اگر باردار هستید، هنگام قرار دادن شیاف مراقبت باشید زیرا خطر ایجاد زخم در دهانه رحم وجود دارد. برای کاهش این خطر، به جای استفاده از اپیلاکاتور، شیاف رابا استفاده از انگشت خود در محل وارد کنید.\n' +
                    '3-در حاملگی آزول‌های موضعی را در سه هفته اول بارداری استفاده نمی‌کنند. عفونت‌ها معمولا با نسیتاتین درمان می‌شوند.\n' +
                    '4-کاندیدیاز شدید میتواند برای افرادی که سیستم ایمنی ضعیف دارند کشنده باشد. در این صورت پزشکان معمولا داروی آمفوتریسین B را به صورت وریدی تجویز می‌کنند.\n' +
                    '5-در بیماران با عفونت‌های مکرر کاندیدایی بایستی آزمایش FBS و CBC بعمل آید.',
            sex:'',
            stress:'-جملات آرامبخش و امیدوارکننده به صورت روزانه/هفتگی\n' +
                    '-مشاوره\n' +
                    '-موسیقی آرامش‌بخش روزانه\n' +
                    '-کاهش استرس با فعالیت بدنی : \n' +
                '1-انواع ورزش (ایروبیک) \n' +
                '2-یوگا-مدیتیشن \n',
            table_method:'در صورت افزودن هیدروکسید پتاسیم (KOH) هیف‌ها و جوانه‌ها دیده میشوند.',
            table_ph:'کمتر از5/4',
            secretion:'سفیدو خوشه‌ای، پنیری شکل، آبکی غیرنرمال',
            findings:'اریتما،ادما، واژن و فرج قرمز و متورم',
            typical_symptoms:'سوزش،تحریک، خارش، مقاربت دردناک',
            table_1:'روش تشخیص',
            table_2:'PH محیط مرطوب',
            table_3:'ترشح',
            table_4:'یافته‌های بالینی',
            table_5:'علائم تیپیک'};

        let en = {signs:'1-Report by the patient:\nItch- Burning sensation\nCheese shape or abnormal vaginal Secretion\nPainful intercourse\n' +
                '2-Observations by the physician:\nErythma-peritoneum-edema\nvagina and red and swollen veins\ncracked skin around the vaginal mouth\n',
            reason:'1. Pathogenic factors:\n Candida albicans - Candida glabrata\n' +
                '2-host related factors:\n' +
                'Lewis Antigen: Women who do not carry this gene are at increased risk for vaginal candidiasis and recurrent fetal infections.\n' +
                '3. Medical agents:\n Candidate disease other than vulvovaginal disease Diabetes Mellitus, Cancer, HIV, Chronic Anemia, Other Diseases (Disabling Immune System Disorders)\n' +
                '4. Use of broad-spectrum antibiotics:\n' +
                'Ampicillin - Tetracycline - Cephalosporins\n' +
                '5. Behavioral factors:\n' +
                '* Sexual behaviors\n' +
                '- Candidate infection increases with the onset of sexual activity.\n' +
                '- Rough intercourse\n' +
                '- Sexual anxiety during menstruation\n' +
                '- Frequent intercourses (7 times or more in one week), is most strong factor of risk.\n' +
                '*Contraception methods:\n' +
                '- Use of Vaginal Pregnancy Sponge\n' +
                '- Use of Intrauterine Preventive Use (IUD)\n' +
                '- Use of contraceptives\n' +
                '6. Nutrition factors:\n' +
                '- Tobacco and alcohol consumption\n' +
                '- Yeasts (Bread - Vinegar - beer)\n' +
                '- Sweets (sugar, jam, soy sauce, etc.)\n' +
                '- Edible mushrooms and cheese and coffee\n' +
                '7-Vaginal and health factors:\n' +
                '- Frequent vaginal doses\n' +
                '- Increased moisture level of the genital area\n' +
                '- Tight and nylon underwear\n' +
                '- Use of health tips during menstruation\n' +
                '- Prolonged maintenance of the tampon in the vagina\n' +
                '- Clarins inside swimming pools\n' +
                '- Aromatic soaps, professional softeners, chemical bleaches,spongeboards \n' +
                '8-Stress\n' +
                '9-Microbial agents:\n' +
                '- An increase in antifungal intake which has been used improperly and repeatedly as a short and incomplete treatment unit.\n' +
                '- Increased use of long-term anti-fungal preservative programs aimed at preventing re-occurrence in women\n' +
                '- Extensive oral or topical treatment\n' +
                '10-pregnancy:\n' +
                'In pregnant women, the incidence of candidal infection increases due to hormonal changes and weight gain, especially in the last three months of pregnancy.\n' +
                '11-Educational level:\n' +
                'The Educational level as a general indicator (due to more awareness and information) can help prevent diseases and control various types of infections.\n' +
                '12-age:\n' +
                '- Candida infection occurs at all ages, but most of it occurs at an early age\n' +
                '- This complication is less common in girls who have not started their menstruation and in postmenopausal women.\n' +
                '- According to the study, age groups of 28-37 years of age had the highest levels of infection.\n' +
                '- According to researcher’s study, the age groups of 26-30 years had the highest rates of infection.\n' +
                '13- Obesity (increase in weight):\n' +
                'Lack of adequate ventilation increases the risk of infection.',

            methods:'The key tips to successful vaginitis treatment are to:\n 1. properly diagnose vaginitis.\n 2. Take precise test biographies. \n' +
                'If you suspect to existence of yeast as well as in difficult cases, use the Nicorson or Agarbasaro culture medium. \n',
            systemic:'Ketoconazole\n' +
                'Fluconazole\n' +
                'Itraconazole',
            topical:'Local:\n' +
                '*Imidazole\n -Micoconazole\n-Clotrimazole\n-Butoconazole\n *Triazole\n -Terconazole\n' +
                '*Nystatin\n *Econazole',
            plant_medicine:'For herbal medicines, it is advisable to consult the relevant physician before taking the drug.\n' +
                'Garlic-Green Tea\n Water of Echinacea angustifolia\n Tea Tree’s Oil - Peppermint\n Vaginal Suppository Vitamin E, A \n Green Tea- Marjoram\n Vitamin C Oral\n Pomegranate \n Grapefruit Extract \n Vetium Shirazi ',
            probiotic:'* Modification and improve of the body\'s defense system\n' +
                '1-Vitamin A, 5000 units per day or beta-carotene 50,000 units per day \n2-Vitamin C, 500 to 1000 mg 3 to 4 times a day\n' +
                '3-B vitamins in group B each 20 to 50 mg per day\n' +
                '4-Zinc (ZN) 10 to 15 mg per day\n' +
                '5-vitamin E, 200 units per day\n' +
                '6. Reduce sugar consumption, sugar, coffee, tobacco and alcohol\n' +
                '7. Increase in food with antibiotics (garlic and onion).\n' +
                '* Adjustment of the intestinal flora (eliminating the source of the candidate, which is the mechanism of the main effect of oral antifungal medicines) or vagina\n' +
                '1-Eating daily 2 tablespoons of non-pasteurized yogurt (containing lactobacillus)\n' +
                '2. Consumption of products containing lactobacillus (not available in Iran)\n' +
                '3. Vaginal honey with lactobacillus-containing ingredients (or sitting inside a lavender-watered pelvic-containing non-pasteurized yogurt) \n4. Vaginal shower with baking soda (A teaspoon in the glass and applying it (causes vaginal alkalization) 2 times a day for 7 to 10 days.\n * Local therapies\n' +
                '1-vaginal shower with iodine 2 times daily for 7 to 14 days\n' +
                '2-acid boric acid capsules (600 mg) intravenously once a day for 10 to 14 days\n' +
                '3. Wetting the ventricle duct (with soap) into the vagina once a day for 1 to 2 weeks or more\n' +
                '4-Sweet glycans daily in the vagina\n',
            Laser:'',
            regime:'-Low sugar diet\n' +
                '- Low-Yeast Diet (Bread, Vinegar, Barley)\n' +
                '- Consumption of garlic and onion because of antibiotic properties\n' +
                '- The use of nuts and Omega-3 and Omega-6 (due to essential fatty acids)\n' +
                '-Use of probiotic products\n' +
                '- Antifungal spices (Cinnamon - Oregano - Maryam Goli - Clove)\n' +
                '- Consumption of citrus fruits and vegetables (vitamin A and vitamin C)\n' +
                '- Meat and fish and dairy products (iron and vitamin B stores)\n' +
                '- No use of tobacco and alcohol',
            prevention:
                '*Preventive measures\n'+
                '1. Do not use wet and damp underwear\n' +
                '2. Choose soft underwear with natural fibers such as cotton, linen, silk \n3. Avoid wearing deodorants in women\'s tops\n' +
                '4. Wash and disinfect underwear with warm water\n' +
                '5. If you are taking antibiotics and have a history of vaginal throat, take vaginal thrush to treat it.\n' +
                '6. Talk to your spouse about sexual matters.\n' +
                '7. Avoid wearing tight underpants or tights.\n' +
                '8. Drying of the genital area\n' +
                '9. Ironing underwear or putting underwear under sunshine\n' +
                '10. Early replacement of the sanitary pad\n' +
                '11. Wash the genital area with empty water or mild detergents \n12. Avoid sitting in a hot tub with frequent and obsessive baths\n' +
                '13. Having a balanced diet\n' +
                '14. Regular consumption of yogurt and other foods that help the growth of beneficial bacteria and the consumption of propiocytes.\n' +
                '*Recommendations:\n' +
                '1. If you are taking vaginal mucus during pregnancy or lactation, oral medicines may not be given to you. Therefore, it is advisable to use an antireflective suppository such as Clotrimazole, Econazole, and Miconazole.\n' +
                '2. If you are pregnant, take care when placing the suppository, as there is a risk of wounding in the cervix. To reduce this risk, instead of using the oplocker, insert the suppository using your finger in place.\n' +
                '3. In pregnancy, do not use topical azoles in the first three weeks of pregnancy. Infections are usually treated with nystatin.\n' +
                '4. Severe candidiasis can be fatal for people with a weak immune system. In this case, doctors usually prescribe amphotericin B to be given intravenously.\n' +
                '5. In patients with recurrent Candida infections, FBS and CBC should be tested.',
            sex:'',
            stress:'-Similar and hopeful options on a daily / weekly basis\n' +
                '-Consultation\n' +
                '- A relaxing chores daily\n' +
                '-Treatment stress reduction with physical activity: 1. Types of exercise (aerobics) 2. Yoga-meditation',
        table_method:'In the case of addition of potassium hydroxide (KOH), hyphae and\n' +
            'buds are seen',
            table_ph:'Less than 4.5',
            secretion:'Blubbery cluster- abnormal shape-watery',
            findings:'Erythma- edema-vagina and red and swollen veins',
            typical_symptoms:'Irritation- irritation- rehearsal- painful intercourse',
        table_1:'Diagnosis method',
        table_2:'PH of wet environment',
        table_3:'Secretion',
        table_4:'Clinical Findings',
        table_5:'Typical symptoms'};


        let final = {};
        console.log(this.state.language,';kfjgfj')
        switch(this.state.language) {
            case 'en':
                final = en;
                break;
            case 'fa':
                final = fa;
                break;
            default:
                final = fa;
        }
        return final;
    }
    render() {
        console.log('passed',this.props[0]);

        return (
            <ScrollView style={styles.container}>



                <Text style={this.state.language==='fa' ? {fontFamily:'B Koodak',color: '#1c375c',textAlign:'right',paddingTop: 7,margin: 5,fontSize: 19,lineHeight:35}:{color: '#1c375c',textAlign:'left',paddingTop: 7,margin: 5,fontSize: 19,lineHeight:35}}>{this.main_text()[this.props[0]]}</Text>
                <View style={this.props[0]==='methods' ? {flexDirection:'row',alignItems:'center',justifyContent: 'center',width:width} :{height:0,width:0,flex:0}}>

                <View style={{width:0.93*width,borderWidth: 2,borderRadius:7,borderColor:'red',flexDirection: 'column'}}>
                    <View style={{flexDirection:'row',borderBottomWidth: 2}}>
                        <Text  style={this.state.language==='fa' ? styles.firs : styles.sec}>{this.main_text()['table_5']}</Text>
                        <View style={{width:2,backgroundColor:'red'}}/>
                        <Text  style={this.state.language==='fa' ? styles.first : styles.second}>{this.main_text()['typical_symptoms']}</Text>

                    </View>
                    <View style={{flexDirection:'row',borderBottomWidth: 2}}>
                        <Text  style={this.state.language==='fa' ? styles.firs : styles.sec}>{this.main_text()['table_4']}</Text>
                        <View style={{width:2,backgroundColor:'red'}}/>
                        <Text  style={this.state.language==='fa' ? styles.first : styles.second}>{this.main_text()['findings']}</Text>

                    </View>
                    <View style={{flexDirection:'row',borderBottomWidth: 2}}>
                        <Text  style={this.state.language==='fa' ? styles.firs : styles.sec}>{this.main_text()['table_3']}</Text>
                        <View style={{width:2,backgroundColor:'red'}}/>
                        <Text  style={this.state.language==='fa' ? styles.first : styles.second}>{this.main_text()['secretion']}</Text>

                    </View>
                    <View style={{flexDirection:'row',borderBottomWidth: 2}}>
                        <Text style={this.state.language==='fa' ? styles.firs : styles.sec} >{this.main_text()['table_2']}</Text>
                        <View style={{width:2,backgroundColor:'red'}}/>
                        <Text  style={this.state.language==='fa' ? styles.first : styles.second}>{this.main_text()['table_ph']}</Text>

                    </View>
                    <View style={{flexDirection:'row',borderBottomWidth: 0}}>
                        <Text  style={this.state.language==='fa' ? styles.firs : styles.sec}>{this.main_text()['table_1']}</Text>
                        <View style={{width:2,backgroundColor:'red'}}/>
                        <Text  style={this.state.language==='fa' ? styles.first : styles.second}>{this.main_text()['table_method']}</Text>

                    </View>



                </View>
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    titles:{fontFamily:'B Koodak',color: '#1c375c',textAlign:'right',paddingTop: 7,margin: 5,fontSize: 19,lineHeight:35},
    first:{fontFamily:'B Koodak',color: '#1c375c',textAlign:'center',paddingTop: 3,margin: 3,fontSize: 19,width:0.5*width},
    second:{color: '#1c375c',textAlign:'center',paddingTop: 3,margin: 3,fontSize: 19,width:0.5*width},
    firs:{fontFamily:'B Koodak',color: '#1c375c',textAlign:'center',paddingTop: 3,margin: 3,fontSize: 19,width:0.3*width},
    sec:{color: '#1c375c',textAlign:'center',paddingTop: 3,margin: 3,fontSize: 19,width:0.3*width}
});
module.export = Main_text;

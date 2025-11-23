import { Category, ScriptItem } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'الكل', icon: 'LayoutGrid' },
  { id: 'quick', name: 'ردود سريعة', icon: 'Zap' },
  { id: 'accounts', name: 'الحسابات', icon: 'User' },
  { id: 'cards', name: 'البطاقات', icon: 'CreditCard' },
  { id: 'transfers', name: 'التحويلات', icon: 'ArrowRightLeft' },
  { id: 'savings', name: 'حساب سنابل', icon: 'TrendingUp' },
  { id: 'digital', name: 'الخدمات الإلكترونية', icon: 'Smartphone' },
  { id: 'complaints', name: 'الشكاوى والاعتراضات', icon: 'AlertTriangle' },
  { id: 'loans', name: 'القروض والتمويل', icon: 'Home' },
];

export const SCRIPTS: ScriptItem[] = [
  // --- Quick Responses ---
  {
    id: 'quick-1',
    categoryId: 'quick',
    title: 'ترحيب بالعميل',
    script: 'السلام عليكم 👋\nتفضل كيف نقدر نساعدك ؟ 🧡',
    scriptEn: 'Peace be upon you 👋\nHow can we help you today? 🧡',
    notes: 'ترحيب عام عند بدء المحادثة',
    tags: ['ترحيب', 'بداية', 'عام'],
  },
  {
    id: 'quick-2',
    categoryId: 'quick',
    title: 'طلب رقم الطلب',
    script: 'حياك الله 👋\nلخدمتك بشكل أفضل، يُرجى تزويدنا برقم الطلب 🧑‍💻',
    scriptEn: 'Welcome 👋\nTo serve you better, please provide us with your order number 🧑‍💻',
    notes: 'عند الحاجة لمتابعة حالة طلب سابق',
    tags: ['رقم طلب', 'متابعة'],
  },
  {
    id: 'quick-3',
    categoryId: 'quick',
    title: 'تحويل للخاص (بيانات حساسة)',
    script: 'حياك الله 👋\nنعتذر عن تجربتك ورضاك يهمنا دايمًا 🧡\nياليت تشاركنا التفاصيل على الخاص عشان نقدر نخدمك بشكل أفضل ✉️',
    scriptEn: 'Welcome 👋\nWe apologize for your experience, your satisfaction matters to us 🧡\nPlease share the details via private message so we can serve you better ✉️',
    notes: 'عندما يكتب العميل مشكلة عامة وتحتاج لبيانات خاصة',
    tags: ['خاص', 'DM', 'بيانات'],
  },
  {
    id: 'quick-4',
    categoryId: 'quick',
    title: 'إنهاء المكالمة / المحادثة',
    script: 'سعداء بخدمتك دائمًا 🙏\nيومك سعيد 🧡',
    scriptEn: 'Happy to serve you always 🙏\nHave a wonderful day 🧡',
    notes: 'خاتمة لطيفة',
    tags: ['خاتمة', 'وداع'],
  },
  {
    id: 'quick-5',
    categoryId: 'quick',
    title: 'تم الرد على الخاص',
    script: 'حياك الله\nأبشر باللي يرضيك، تم الرد على الخاص 🙏',
    scriptEn: 'Welcome\nWe have replied to your private message 🙏',
    notes: 'تأكيد للعميل في العام أنه تم الرد',
    tags: ['رد', 'خاص'],
  },
    {
    id: 'quick-6',
    categoryId: 'quick',
    title: 'تحويل إلى خدمة العملاء (هاتف)',
    script: 'أهلًا 👋\nلخدمتك بشكل أفضل، يرجى التواصل مع خدمة العملاء عبر الرقم الموحد 8001244410 📞\nمتواجدون على مدار الساعة طوال أيام الأسبوع لخدمتك 🧡',
    scriptEn: 'Hello 👋\nTo serve you better, please contact customer service via the unified number 8001244410 📞\nWe are available 24/7 to serve you 🧡',
    notes: 'عندما لا يمكن حل المشكلة نصياً',
    tags: ['اتصال', 'هاتف', 'دعم'],
  },

  // --- Accounts ---
  {
    id: 'acc-1',
    categoryId: 'accounts',
    title: 'فتح حساب جديد',
    script: 'حياك الله 👋\nافتح حسابك معنا خلال دقيقتين بس! 🤩 من خلال التطبيق : https://d360.com/ar\nوعش تجربة السفر حول العالم من غير رسوم دولية 🌍😎',
    scriptEn: 'Welcome 👋\nOpen your account with us in just two minutes! 🤩 via the app: https://d360.com/en\nAnd experience traveling the world without international fees 🌍😎',
    notes: '',
    tags: ['فتح حساب', 'جديد'],
  },
  {
    id: 'acc-2',
    categoryId: 'accounts',
    title: 'رفض رفع الحد',
    script: 'حياك الله\nشكرًا لتواصلك مع خدمة عملاء بنك D360\n\nنعتذر، تم رفض طلب رفع الحد لعدم استيفاء شروط البنك المطلوبة، وهي كالتالي:\n1. مرور 30 يومًا على فتح الحساب\n2. توفر رصيد لا يقل عن 5,000 ريال سعودي\n\nبمجرد استيفاء هذه الشروط، يمكنك إعادة تقديم الطلب.\nسعداء لخدمتك',
    scriptEn: 'Welcome\nThank you for contacting D360 Bank Customer Service\n\nWe apologize, the limit increase request was rejected as the required bank conditions were not met:\n1. 30 days have passed since account opening\n2. A balance of at least 5,000 SAR is available\n\nOnce these conditions are met, you can re-apply.\nHappy to serve you',
    notes: 'إيميل / رد رسمي',
    tags: ['حد', 'رفض', 'شروط'],
  },
  {
    id: 'acc-3',
    categoryId: 'accounts',
    title: 'تجميد الحساب (متطلبات)',
    script: 'عميلنا العزيز\nبالإشارة إلى التحفظ القائم على حسابكم، نأمل منكم التكرّم بتزويدنا بالمستندات التالية لإتمام مراجعة الحالة:\n\n1. عدد المستخدمين المرتبطين بالحساب.\n2. تفاصيل آخر عمليات الإيداع والحوالات مع توضيح العلاقة.\n3. هل يتم استخدام هذا الحساب استخدام شخصي ام تجاري؟\n\n📌 يرجى كتابة هذه المعلومات بخط اليد والتوقيع عليها لضمان المصداقية.',
    scriptEn: 'Dear Customer\nRegarding the hold on your account, please kindly provide the following documents to complete the status review:\n\n1. Number of users associated with the account.\n2. Details of the last deposit and transfer transactions with relationship clarification.\n3. Is this account used for personal or commercial purposes?\n\n📌 Please write this information by hand and sign it to ensure authenticity.',
    notes: 'يستخدم لحالات Debit Block',
    tags: ['تجميد', 'بلوك', 'مستندات'],
  },
  {
    id: 'acc-4',
    categoryId: 'accounts',
    title: 'إغلاق الحساب لعدم النشاط',
    script: 'حياك الله 👋\nنعتذر، تم إغلاق حسابك لعدم إجراء أي عمليات خلال 90 يومًا 📆، وذلك حسب الأنظمة المعتمدة ⚖️.\n\nالحل سهل:\n1️⃣ احذف التطبيق.\n2️⃣ سجّل من جديد.\n3️⃣ اتبع الخطوات المطلوبة 👌.\nسعداء بعودتك من جديد 🧡',
    scriptEn: 'Welcome 👋\nWe apologize, your account has been closed due to inactivity for 90 days 📆, in accordance with approved regulations ⚖️.\n\nThe solution is easy:\n1️⃣ Delete the app.\n2️⃣ Register again.\n3️⃣ Follow the required steps 👌.\nHappy to have you back 🧡',
    notes: 'حسابات مجمدة 90 يوم',
    tags: ['إغلاق', 'نشاط', '90 يوم'],
  },
  {
    id: 'acc-5',
    categoryId: 'accounts',
    title: 'تنشيط الحساب',
    script: 'حياك الله 👋\nحتى تعيد تنشيط حسابك بسهولة:\n🔹 احذف التطبيق.\n🔹 نزّل التطبيق من جديد.\n🔹 ادخل مرة ثانية بنفس الرقم السابق 📲.\nعودة موفقة إن شاء الله 🧡',
    scriptEn: 'Welcome 👋\nTo reactivate your account easily:\n🔹 Delete the app.\n🔹 Download the app again.\n🔹 Log in again with the same previous number 📲.\nGood luck 🧡',
    notes: '',
    tags: ['تنشيط', 'إعادة'],
  },
  {
    id: 'acc-6',
    categoryId: 'accounts',
    title: 'تحديث الهوية',
    script: 'حياك الله،\nتحديث هويتك سهل وبسيط! \nافتح التطبيق 📱، اضغط على الإشعار اللي وصلك 😉، وبعدها أكمل الخطوات اللي بتظهر لك ✅ \nوفي حال واجهتك أي مشكلة، نحن دائمًا بالخدمة عبر الرقم الموحد (8001244410) 📞',
    scriptEn: 'Welcome,\nUpdating your ID is easy and simple!\nOpen the app 📱, click on the notification you received 😉, and then complete the steps that appear ✅\nIn case you face any problem, we are always at your service via the unified number (8001244410) 📞',
    notes: '',
    tags: ['هوية', 'تحديث', 'نفاذ'],
  },
  {
    id: 'acc-7',
    categoryId: 'accounts',
    title: 'هل أنتم بنك أم محفظة؟',
    script: 'حياك الله 👋🏻 \nنحب نوضح إن بنك D360 هو بنك مستقل ومرخّص من البنك المركزي السعودي، ومدعوم من صندوق الاستثمارات العامة 💼 \nوليس محفظة رقمية، بل نقدم خدمات مصرفية متكاملة عبر تطبيقنا بكل سهولة وأمان 📲💳',
    scriptEn: 'Welcome 👋🏻\nWe would like to clarify that D360 Bank is an independent bank licensed by the Saudi Central Bank, and backed by the Public Investment Fund 💼\nIt is not a digital wallet, but we provide integrated banking services via our app with ease and security 📲💳',
    notes: 'تعريف بالبنك',
    tags: ['تعريف', 'ترخيص'],
  },

  // --- Cards ---
  {
    id: 'card-1',
    categoryId: 'cards',
    title: 'طلب البطاقة البلاستيكية',
    script: 'حياك الله 👋 \nتقدر تطلب البطاقة البلاستيكية بكل سهولة من التطبيق:\n\nمن الشاشة الرئيسية:\n1️⃣ اضغط على "البطاقة"\n2️⃣ اختر "طلب بطاقة بلاستيكية"\n\n📦 يتم التوصيل خلال 5 إلى 7 أيام عمل.\n✅ أول إصدار مجاني.',
    scriptEn: 'Welcome 👋 \nYou can request the plastic card easily from the app:\n\nFrom the home screen:\n1️⃣ Tap on "Card"\n2️⃣ Select "Request Plastic Card"\n\n📦 Delivery takes 5 to 7 working days.\n✅ First issuance is free.',
    notes: 'مجانية لأول مرة',
    tags: ['طلب', 'بلاستيكية', 'توصيل'],
  },
  {
    id: 'card-2',
    categoryId: 'cards',
    title: 'البطاقة الوردية (Pink Card)',
    script: 'حياك الله 👋🏻\nالبطاقة الوردية: بطاقة مستقلة بنفس المزايا مرتبطة بالحساب، وتدعم فيزا ومدى 💳 \nوتقدر تستخدمها بالمملكة وخارجها وبدون أي رسوم 🌍✨\n\nملاحظة: العرض لفترة محدودة.',
    scriptEn: 'Welcome 👋🏻\nThe Pink Card: An independent card with the same benefits linked to the account, supporting Visa and Mada 💳\nYou can use it inside and outside the Kingdom with no fees 🌍✨\n\nNote: Limited time offer.',
    notes: 'إصدار خاص',
    tags: ['وردي', 'تصميم', 'عرض'],
  },
  {
    id: 'card-3',
    categoryId: 'cards',
    title: 'إضافة البطاقة للمحفظة (مشكلة)',
    script: 'حياك الله 👋\nفي حال واجهت مشكلة في إضافة البطاقة إلى المحفظة، يُرجى:\n🔹 تحديث النظام إلى آخر إصدار\n🔹 إعادة تشغيل الجهاز\n🔹 التأكد من أن البطاقة مفعّلة (جمد البطاقة 5 ثواني وأعد تفعيلها)\n\nوفي حال استمرار المشكلة، نرجو رفع طلب عبر التطبيق.',
    scriptEn: 'Welcome 👋\nIf you are facing a problem adding the card to the wallet, please:\n🔹 Update the system to the latest version\n🔹 Restart the device\n🔹 Ensure the card is active (Freeze the card for 5 seconds and reactivate it)\n\nIf the problem persists, please raise a request via the app.',
    notes: 'Apple Pay / Wallet',
    tags: ['محفظة', 'Apple Pay', 'مشكلة'],
  },
  {
    id: 'card-4',
    categoryId: 'cards',
    title: 'تفعيل البطاقة',
    script: 'حياك الله 👋\nلتفعيل البطاقة:\n1️⃣ من الصفحة الرئيسية، اضغط على البطاقة 📱 \n2️⃣ اختر "استلمت البطاقة، فعّل الآن" ✅ واتبع التعليمات\n\n💳 بعد التفعيل، بيظهر لك خيار تعيين الرقم السري.',
    scriptEn: 'Welcome 👋\nTo activate the card:\n1️⃣ From the home screen, tap on the card 📱\n2️⃣ Select "Received card, activate now" ✅ and follow instructions\n\n💳 After activation, an option to set the PIN will appear.',
    notes: '',
    tags: ['تفعيل', 'PIN'],
  },
  {
    id: 'card-5',
    categoryId: 'cards',
    title: 'البطاقة لا تعمل في روسيا',
    script: 'حياك الله 👋\nنعتذر، بطاقة D360 قد لا تعمل في روسيا 🇷🇺 بسبب سياسات أنظمة الدفع هناك.\nلضمان أفضل تجربة، يُفضل استخدامها في الدول المدعومة ✅',
    scriptEn: 'Welcome 👋\nWe apologize, the D360 card may not work in Russia 🇷🇺 due to payment system policies there.\nTo ensure the best experience, it is preferred to use it in supported countries ✅',
    notes: 'قيود جغرافية',
    tags: ['روسيا', 'حظر', 'سفر'],
  },
  {
    id: 'card-6',
    categoryId: 'cards',
    title: 'السحب النقدي الدولي',
    script: 'حياك الله 🧡\nتقدر تسحب كاش دولياً بدون أي رسوم من جهتنا 💳✈️\nبس تأكد من استخدام جهاز صراف آلي يدعم Visa وتختار السحب بعملة البلد 💵🌍\nأي رسوم إضافية قد تكون من البنك المالك للصراف نفسه.',
    scriptEn: 'Welcome 🧡\nYou can withdraw cash internationally without any fees from our side 💳✈️\nJust make sure to use an ATM that supports Visa and choose to withdraw in the country\'s currency 💵🌍\nAny additional fees may be from the bank owning the ATM itself.',
    notes: 'ميزة تنافسية',
    tags: ['سحب', 'دولي', 'كاش'],
  },

  // --- Transfers ---
  {
    id: 'trans-1',
    categoryId: 'transfers',
    title: 'مدة وصول الحوالة الدولية',
    script: 'حياك الله 👋\nشكرًا لاختيارك بنك D360 🧡\nالحوالات الدولية تُرسل مباشرة من طرفنا، لكن وقت وصولها يعتمد على أوقات عمل البنك المستلم 🌍.\n⏳ إذا مضى أكثر من 48 ساعة ولم تصل، يرجى رفع طلب عبر التطبيق.',
    scriptEn: 'Welcome 👋\nThank you for choosing D360 Bank 🧡\nInternational transfers are sent immediately from our side, but arrival time depends on the receiving bank\'s working hours 🌍.\n⏳ If more than 48 hours have passed and it hasn\'t arrived, please raise a request via the app.',
    notes: '',
    tags: ['دولي', 'تأخير', 'وقت'],
  },
  {
    id: 'trans-2',
    categoryId: 'transfers',
    title: 'خطأ في الآيبان',
    script: 'عزيزي العميل\nنفيدك بأنه تم إدخال بيانات المستفيد بشكل غير صحيح، مما تسبب في تعثّر عملية التحويل.\nلحل المشكلة:\n1️⃣ احذف المستفيد عبر التطبيق.\n2️⃣ أعد إضافته برقم الآيبان الصحيح.\n3️⃣ أعد محاولة التحويل.',
    scriptEn: 'Dear Customer\nWe inform you that the beneficiary details were entered incorrectly, causing the transfer to fail.\nTo solve the problem:\n1️⃣ Delete the beneficiary via the app.\n2️⃣ Re-add them with the correct IBAN.\n3️⃣ Retry the transfer.',
    notes: 'رفض الحوالة',
    tags: ['آيبان', 'خطأ', 'مستفيد'],
  },
  {
    id: 'trans-3',
    categoryId: 'transfers',
    title: 'ويسترن يونيون',
    script: 'حياك الله 👋 \nنعتذر، لا يمكن التحويل من D360 إلى ويسترن يونيون حاليًا.\nالتحويل متاح فقط بين البنوك المدرجة داخل التطبيق، ومن حساب بنكي إلى حساب بنكي آخر 🏦✅',
    scriptEn: 'Welcome 👋\nWe apologize, transferring from D360 to Western Union is not currently available.\nTransfer is only available between banks listed inside the app, and from a bank account to another bank account 🏦✅',
    notes: 'خدمة غير متوفرة',
    tags: ['western union', 'تحويل'],
  },
  {
    id: 'trans-4',
    categoryId: 'transfers',
    title: 'حدود التحويل',
    script: 'حياك الله\nيرجى العلم بأن البنك يطبق حدودًا على الحسابات:\n🔹 حدود التحويل: 5000 ريال يوميًا / 75,000 ريال شهريًا\n🔹 حدود الإيداع: 10,000 ريال يوميًا\n\nلطلب رفع الحد، يرجى التواصل عبر الرقم الموحد.',
    scriptEn: 'Welcome\nPlease be aware that the bank applies limits on accounts:\n🔹 Transfer limits: 5,000 SAR daily / 75,000 SAR monthly\n🔹 Deposit limits: 10,000 SAR daily\n\nTo request a limit increase, please contact via the unified number.',
    notes: 'الحدود القياسية',
    tags: ['حد', 'يومي', 'شهري'],
  },

  // --- Savings (Sanabil) ---
  {
    id: 'sav-1',
    categoryId: 'savings',
    title: 'ماهو حساب سنابل؟',
    script: 'حياك الله 👋\nحساب سنابل هو حساب ادخاري بعوائد يومية 🌾\n\nمميزاته:\n✅ أرباح تُوزّع يوميًا\n✅ استحقاق يومي بدون شروط معقدة\n✅ سحب بأي وقت\n✅ متوافق مع الشريعة الإسلامية\n\nتقدر تفتحه بدقيقتين من التطبيق!',
    scriptEn: 'Welcome 👋\nSanabil account is a savings account with daily returns 🌾\n\nFeatures:\n✅ Profits distributed daily\n✅ Daily accrual without complex conditions\n✅ Withdraw anytime\n✅ Sharia compliant\n\nYou can open it in two minutes from the app!',
    notes: 'منتج ادخاري',
    tags: ['سنابل', 'ادخار', 'تعريف'],
  },
  {
    id: 'sav-2',
    categoryId: 'savings',
    title: 'نسب الأرباح في سنابل',
    script: 'مستويات حساب سنابل ومعدل نسبة الربح السنوي:\n\n1️⃣ من 2,500 إلى 4,999 ريال = 2%\n2️⃣ من 5,000 إلى 19,999 ريال = 3%\n3️⃣ من 20,000 إلى 49,999 ريال = 4%\n4️⃣ أكثر من 50,000 ريال = تصل إلى 6% (على أول 100 ألف)',
    scriptEn: 'Sanabil account tiers and Annual Percentage Rate (APR):\n\n1️⃣ 2,500 to 4,999 SAR = 2%\n2️⃣ 5,000 to 19,999 SAR = 3%\n3️⃣ 20,000 to 49,999 SAR = 4%\n4️⃣ More than 50,000 SAR = Up to 6% (on first 100k)',
    notes: 'شرائح الرصيد',
    tags: ['أرباح', 'نسبة', 'شرائح'],
  },
  {
    id: 'sav-3',
    categoryId: 'savings',
    title: 'اللجنة الشرعية',
    script: 'حياك الله 👋\nنعم، حساب سنابل معتمد من لجنة شرعية تضم نخبة من العلماء:\n👤 الدكتور محمد بن علي القري\n👤 الدكتور خالد السياري\n👤 الدكتور بلقاسم بن ذاكر الزُّبيدي',
    scriptEn: 'Welcome 👋\nYes, Sanabil account is approved by a Sharia committee comprising elite scholars:\n👤 Dr. Mohammed Ali Elgari\n👤 Dr. Khalid Al-Sayari\n👤 Dr. Belqasem Al-Zubaidi',
    notes: '',
    tags: ['شرعي', 'إسلامي'],
  },

  // --- Digital Services ---
  {
    id: 'dig-1',
    categoryId: 'digital',
    title: 'مشكلة في التطبيق',
    script: 'حياك الله 👋\nلحل مشكلة التطبيق، يرجى اتباع التالي:\n🔄 تأكد من تحديث التطبيق لآخر إصدار.\n📶 جرب استخدام بيانات الجوال بدلًا من الواي فاي.\n🚫 تأكد من عدم تشغيل VPN.\n\nإذا استمرت المشكلة، تواصل معنا عبر 8001244410.',
    scriptEn: 'Welcome 👋\nTo solve the app problem, please follow these steps:\n🔄 Make sure to update the app to the latest version.\n📶 Try using mobile data instead of Wi-Fi.\n🚫 Ensure VPN is not turned on.\n\nIf the problem persists, contact us via 8001244410.',
    notes: 'Troubleshooting',
    tags: ['تطبيق', 'عطل', 'دخول'],
  },
  {
    id: 'dig-2',
    categoryId: 'digital',
    title: 'توثيق رقم الجوال',
    script: 'حياك الله\nحسب سياسة البنك، يلزم أن يكون رقم الجوال مسجل وموثّق باسمك في أبشر 📲.\nللتأكد، يمكنك استخدام خدمة "أرقامي" من هيئة الاتصالات.\nفي حال لم يظهر الرقم باسمك، يرجى توثيقه لدى مزود الخدمة أولاً.',
    scriptEn: 'Welcome\nAccording to bank policy, the mobile number must be registered and verified in your name in Absher 📲.\nTo verify, you can use the "My Numbers" service from CITC.\nIf the number does not appear in your name, please verify it with the service provider first.',
    notes: 'مشاكل التسجيل',
    tags: ['أبشر', 'توثيق', 'جوال'],
  },
  {
    id: 'dig-3',
    categoryId: 'digital',
    title: 'رسالة "تعليق مؤقت"',
    script: 'حياك الله 👋 \nالرسالة الظاهرة "تعليق مؤقت للمعاملات" هي جزء من نظام الحماية الأمني 🔒.\nيرجى الانتظار حتى انتهاء المدة المحددة (عادة 24-48 ساعة) وستعود الخدمة للعمل.\n🚫 لا تحذف التطبيق خلال هذه الفترة.',
    scriptEn: 'Welcome 👋\nThe message "Temporary Transaction Suspension" is part of the security protection system 🔒.\nPlease wait until the specified period ends (usually 24-48 hours) and the service will work again.\n🚫 Do not delete the app during this period.',
    notes: 'Security block temporary',
    tags: ['أمان', 'تعليق', 'حظر'],
  },

  // --- Complaints ---
  {
    id: 'comp-1',
    categoryId: 'complaints',
    title: 'تقديم بلاغ احتيال',
    script: 'عزيزي العميل\nلتقديم بلاغ احتيال، يرجى التواصل معنا فوراً عبر الأرقام الموحدة: 8001244410.\nكما يمكنك مراسلتنا عبر الإيميل المختص: fraud-investigation@d360.com\nنعتذر عن عدم استقبال هذه البلاغات عبر الشات لسرعة الإجراء.',
    scriptEn: 'Dear Customer\nTo report fraud, please contact us immediately via unified numbers: 8001244410.\nYou can also email us at: fraud-investigation@d360.com\nWe apologize for not accepting these reports via chat for speed of action.',
    notes: 'عاجل جداً',
    tags: ['احتيال', 'سرقة', 'طوارئ'],
  },
  {
    id: 'comp-2',
    categoryId: 'complaints',
    title: 'الاعتراض على عملية',
    script: 'حياك الله 👋\nلرفع اعتراض على عملية:\n1️⃣ افتح التطبيق\n2️⃣ انتقل إلى "سجل العمليات"\n3️⃣ اختر العملية واضغط "الاعتراض على العملية"\n\n📌 إذا كانت العملية شراء، يفضل التواصل مع التاجر أولاً.',
    scriptEn: 'Welcome 👋\nTo raise a dispute on a transaction:\n1️⃣ Open the app\n2️⃣ Go to "Transaction History"\n3️⃣ Select the transaction and tap "Dispute Transaction"\n\n📌 If it\'s a purchase, it is preferred to contact the merchant first.',
    notes: '',
    tags: ['اعتراض', 'استرداد', 'عملية'],
  },
  {
    id: 'comp-3',
    categoryId: 'complaints',
    title: 'استرجاع مبلغ من التاجر',
    script: 'أهلًا وسهلًا 👋 \nفي حال تم استرجاع مبلغ من التاجر، قد يظهر المبلغ "معلق" مؤقتاً.\nعادةً يُحرر المبلغ خلال 1 إلى 30 يوم عمل حسب نوع البطاقة.\nإذا انتهت المدة ولم يصل، يرجى رفع طلب عبر التطبيق مع إيصال الاسترجاع.',
    scriptEn: 'Welcome 👋\nIn case a refund was issued by the merchant, the amount may appear "pending" temporarily.\nUsually, the amount is released within 1 to 30 working days depending on card type.\nIf the period ends and it hasn\'t arrived, please raise a request via the app with the refund receipt.',
    notes: 'Refunds',
    tags: ['استرجاع', 'تاجر', 'معلق'],
  },

  // --- Loans ---
  {
    id: 'loan-1',
    categoryId: 'loans',
    title: 'طلب تمويل / قرض',
    script: 'حياك الله 👋\nخدمة التمويل يتم تفعيلها تدريجيًا لعملاء محددين، وسيتم إشعار المؤهلين برسائل نصية 📩.\nحالياً لا يمكن التقديم المباشر إلا إذا ظهر لك العرض في التطبيق تحت "اكتشف المنتجات".',
    scriptEn: 'Welcome 👋\nThe financing service is being activated gradually for specific customers, and eligible ones will be notified via SMS 📩.\nCurrently, direct application is not possible unless the offer appears to you in the app under "Discover Products".',
    notes: 'متاح لفئة محددة',
    tags: ['تمويل', 'قرض', 'أهلية'],
  },
];
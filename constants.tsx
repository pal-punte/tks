import React from 'react';
import { NavLink, Worry, Feature, ServiceCategory, ProcessStep, PricingInfo, Testimonial, FAQItem, NewsItem, ContentPage, TaxTopicsContent, PrivacyPolicyContent, ProfileDetails } from './types';
import { 
  BuildingOffice2Icon, 
  BanknotesIcon, 
  ChartBarIcon, 
  CloudIcon, 
  ScaleIcon,
  UsersIcon,
  SparklesIcon,
  BriefcaseIcon,
  HomeIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  UserPlusIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  LightBulbIcon,
  AcademicCapIcon,
  BookOpenIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline';

// --- FIRM INFORMATION (Corrected) ---
export const FIRM_NAME = "TKS税理士法人";
export const REPRESENTATIVE_NAME = "清水 一広";
export const FIRM_ADDRESS = "〒359-1122 埼玉県所沢市寿町22番14号 コスモフォーラム所沢102";
export const FIRM_PHONE = "04-2921-3218";
export const FIRM_PHONE_TEL = "tel:04-2921-3218";
export const FIRM_PHONE_MOBILE = "080-3598-5312";
export const FIRM_PHONE_MOBILE_TEL = "tel:080-3598-5312";
export const FIRM_FAX = "04-2633-0636";
export const FIRM_EMAIL = "info@smzkaikei.com";
export const FIRM_HOURS_DETAILED = "平日は午前9時～午後5時まで。\n土日祝日は午前10時～午後5時まで。\n（日曜・祝日はお休みいただく場合もあります）";


// --- IMPORTANT NOTICES ---
export const NEW_CLIENT_NOTICE = "現在、新規での個人の所得税確定申告は一切受け付けておりません。\n法人の方は税理士変更の場合のみ受け付けております。";

export const NAV_LINKS: NavLink[] = [
  { href: '#features', label: '事務所の特徴' },
  { href: '#about', label: '代表挨拶' },
  { href: '#services', label: '業務案内' },
  { href: '#pricing', label: '料金プラン' },
  { href: '#flow', label: 'ご契約の流れ' },
  { href: '#contact', label: 'お問い合わせ' },
];

export const WORRIES: Worry[] = [
    { text: '今の顧問料が高いと感じている' },
    { text: '税理士の訪問がなく、相談しにくい' },
    { text: '質問へのレスポンスが遅い' },
    { text: '会社設立・起業の相談をしたい' },
    { text: '融資や資金繰りの相談がしたい' },
    { text: '相続について相談したい' },
];

// --- FEATURES (Corrected to match source site) ---
export const FEATURES: Feature[] = [
  {
    icon: <UsersIcon className="h-10 w-10 text-sky-700" />,
    title: '若手税理士による親身な対応',
    description: '30代の若手税理士が、お客様と同じ目線で親身にサポート。ITツールにも精通しており、スムーズなコミュニケーションが可能です。',
  },
  {
    icon: <CloudIcon className="h-10 w-10 text-sky-700" />,
    title: 'クラウド会計導入支援',
    description: 'freeeやマネーフォワードクラウドの導入をサポートし、経理業務の効率化を実現。リアルタイムでの経営状況把握を可能にします。',
  },
  {
    icon: <BanknotesIcon className="h-10 w-10 text-sky-700" />,
    title: '創業融資サポート',
    description: '事業計画書の作成から金融機関との交渉まで、資金調達を強力にバックアップ。補助金・助成金の最新情報もご提供します。',
  },
];

// --- ABOUT / GREETING ---
export const GREETING_TEXT = [
    `この度は、${FIRM_NAME}のホームページをご覧いただき、誠にありがとうございます。代表税理士の${REPRESENTATIVE_NAME}です。`,
    `私たちはカジュアルな税理士事務所です。時にご相談時に私服でご対応することもあります。お気軽にご相談下さい。（細かいことを気になさる方や堅めの方は向いていないかもしれません。）`,
    `私たちは、所沢市を中心に、地域の中小企業や個人事業主の皆様を支援する会計事務所です。目まぐるしく変化する経済環境の中で、経営者の皆様は日々多くの課題に直面されていることと存じます。`,
    `自転車とバイクでの移動を武器に迅速対応を致します！私たちは、積極的に業務に取り組み、顧問先の皆様のベストパートナーとして誠心誠意、励んで参ります。『親しみやすく・依頼しやすい』税理士ですので、お気軽にご相談下さい。`,
];

export const PROFILE_DETAILS: ProfileDetails = {
    details: [
        { label: '所属', value: '関東信越税理士会 所沢支部 (登録番号 116936)' },
        { label: '資格', value: '税理士・行政書士' },
        { label: '経歴', value: '1982年 千葉県館山市生まれ 埼玉県所沢育ち' },
    ],
    history: [
        {
            year: '2004年',
            description: (
                <>
                    立命館大学理工学部機械工学科 卒業
                    <br />
                    <span className="text-xs text-slate-500">
                        吉原福全研究室 論文”都市ゴミ燃焼時における臭素化ダイオキシン類の発生と抑制”
                    </span>
                </>
            ),
        },
        {
            year: '2005-2010年',
            description: (
                 <>
                    中堅会計事務所・資産税専門会計事務所等に在籍
                    <br />
                    <span className="text-xs text-slate-500">
                        (2008年12月に税理士試験合格)
                    </span>
                </>
            ),
        },
        {
            year: '2010年9月',
            description: '６年間中堅会計事務所・資産税専門会計事務所等に在籍後、ようやく開業する。',
        },
        {
            year: '2021年10月',
            description: '久手川税理士と共に税理士法人化する。',
        },
        {
            year: '2033年12月',
            description: '現役引退予定？',
        },
    ],
};

// --- SERVICES (Expanded with content from old site) ---
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    categoryTitle: '個人のお客様',
    items: [
      {
        title: '相続税対策・申告、贈与税申告',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p><strong>実は、税理士の中でも「相続税」は専門性が非常に高く、誰に依頼するかで納税額が大きく変わる可能性がある分野です。</strong></p>
            <p>当事務所では、相続税に精通した税理士が、お客様の状況を丁寧に分析し、あらゆる特例の適用を検討することで、納税額を最小限に抑えることを目指します。遺産分割協議のサポートから納税計画、税務調査まで一貫して対応いたします。</p>
            <p className="font-semibold">こんなご相談をお待ちしております:</p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>生前のうちに相続税がいくらになるか試算したい</li>
              <li>効果的な生前贈与のやり方を知りたい</li>
              <li>家族が揉めないように遺言書を作成したい</li>
              <li>実際に相続が発生して、何から手をつけていいか分からない</li>
            </ul>
             <p>詳しくは<a href="#inheritance-guide" className="text-sky-700 hover:underline font-semibold">「税理士が教える相続対策」</a>や<a href="#accountant-choice-guide" className="text-sky-700 hover:underline font-semibold">「失敗しない税理士の選び方」</a>もご参考にして下さい。</p>
          </div>
        )
      },
      {
        title: '確定申告（不動産・事業所得）',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>個人の方の確定申告（不動産所得・事業所得）に対応しております。当事務所では、申告期限間際の作業によるミスを防ぐため、早期の着手・完了を徹底しております。</p>
            <p>また、確定申告をご依頼のお客様には、ご自身の相続税が将来発生するかどうかの簡易シミュレーションを無料で行います。将来を見据えたアドバイスをご提供できるのが当事務所の強みです。</p>
            <p className="font-semibold text-red-600 bg-red-50 p-3 rounded-md">{NEW_CLIENT_NOTICE}</p>
            <p>確定申告の報酬は<a href="#pricing" className="text-sky-700 hover:underline font-semibold">料金プラン</a>に明記しており、低価格に抑えております。申告後も、税金に関するご質問があればいつでも無料でご相談いただけます。詳しくは<a href="#tax-return-guide" className="text-sky-700 hover:underline font-semibold">「お任せください確定申告」</a>をご覧ください。</p>
          </div>
        )
      },
       {
        title: '事業承継サポート',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>個人事業主の方の、後継者への事業の引継ぎをサポートします。単なる税金計算だけでなく、後継者の育成や引継ぎのタイミング、最適な承継方法など、円滑な事業承継を税務・経営の両面からご支援いたします。</p>
          </div>
        )
      },
    ]
  },
  {
    categoryTitle: '法人のお客様',
    items: [
      {
        title: '税務顧問・経営コンサルティング',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p><strong>当事務所は、特に飲食店や美容院、ITサービスなどの小規模な事業者の皆様を全力でサポートすることを得意としております。</strong></p>
            <p>クラウド会計を活用し、お客様が常に最新の経営状況を把握できる体制を構築します。その上で、経営判断に役立つタイムリーなアドバイスをご提供し、企業の成長を力強く後押しします。</p>
            <p>お客様のニーズに応じて訪問回数やサポート内容を柔軟に調整し、明瞭な報酬体系でサービスをご提供します。詳しくは<a href="#pricing" className="text-sky-700 hover:underline font-semibold">料金プラン</a>をご参照ください。</p>
          </div>
        )
      },
      {
        title: '会社設立・創業融資支援',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>会社の設立手続きから、設立後の税務署への届出、社会保険の手続きまで、ワンストップでサポートいたします。</p>
            <p>また、当事務所の強みである<strong>「創業融資サポート」</strong>では、日本政策金融公庫などへの融資申込に必要な事業計画書の作成を強力に支援します。審査を通過するためのポイントを押さえた計画書を作成し、資金調達の成功確率を高めます。</p>
          </div>
        )
      },
      {
        title: '節税対策',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>決算時や日々の節税対策はもちろん、消費税の納税額を抑える対策、役員報酬の適正額シミュレーションなど、様々な角度から検証し、お客様に最適な節税プランをご提案します。</p>
            <p>私たちは、法律の範囲内で認められた正当な節税手法を駆使し、お客様のキャッシュフローを最大化することを目指します。過度な節税や脱税につながるようなご提案は一切行いませんのでご安心ください。</p>
          </div>
        )
      },
      {
        title: '決算・申告',
        content: (
          <div className="space-y-4 leading-relaxed">
            <p>日々の会計処理の精度を高めるとともに、決算期には税制上有利な処理を検討し、適切な決算書・申告書を作成します。</p>
            <p>決算・申告のみのご依頼も承っておりますので、お気軽にご相談ください。</p>
          </div>
        )
      },
    ]
  }
];


// --- PRICING (Completely corrected based on source site: price/2.html) ---
export const PRICING_INFO: PricingInfo = {
  title: '報酬のご案内',
  subtitle: '決算料安心の価格',
  notice: [
    '法人のお客様は税理士変更に限ります。',
    '現在、個人のお客様は受け付けておりません。',
    '消費税の課税事業主様の消費税申告料を別途させて頂きます。'
  ],
  annualFeeTitle: '税理士報酬（年間）',
  tiers: [
    { revenue: '～1,000万円', corporateFee: '125,000円', individualFee: '100,000円' },
    { revenue: '～5,000万円', corporateFee: '155,000円', individualFee: '125,000円' },
    { revenue: '～1億円', corporateFee: '200,000円', individualFee: '180,000円' },
    { revenue: '1億円～', corporateFee: 'ご相談', individualFee: 'ご相談' },
  ],
  annualFeeNotes: (
    <div className="text-sm text-slate-600 space-y-2 leading-relaxed">
        <p>月々の顧問料は８千円～３万円で関与度合い・売上高・自計化レベルなどによります。</p>
        <p>基本的に記帳料金は含まれておりますが記帳量に応じて別途料金が発生する可能性がございます。</p>
        <p className="font-semibold">※全て別途消費税</p>
    </div>
  ),
  otherFeesTitle: 'その他の料金',
  otherFees: [
    {
      title: '年末調整　償却資産税申告',
      content: <p className="leading-relaxed">年末調整や償却資産などは１万円程度となりますが、従業員数によって増額いたします。</p>
    },
    {
      title: '相続税の申告',
      content: (
        <div className="space-y-3 leading-relaxed">
            <p>相続税の報酬は基本的には基本料金１０万円＋課税価格の０．４％（最低金額３０万円）　※消費税別途</p>
            <p className="pl-4 text-sm bg-slate-100 p-3 rounded-lg"><strong>（例）相続財産額１億円の場合</strong><br/>１０万円＋１億円×0.4％＝５０万円（+消費税10％）</p>
            <p>小規模宅地の評価減で相続税が発生しない場合等の比較的簡易な場合は値下げもいたします。土地が２か所以上の場合や相続人が4人以上の場合は加算をする場合があります。</p>
            <p>相続税の申告についてはこちらの<a href="#inheritance-guide" className="text-sky-700 hover:underline font-semibold">「税理士が教える相続対策」</a>や<a href="#accountant-choice-guide" className="text-sky-700 hover:underline font-semibold">「失敗しない税理士の選び方」</a>をご参考にして下さい。</p>
        </div>
      )
    },
    {
      title: '遺 言 書 作 成',
      content: (
        <div className="space-y-3 leading-relaxed">
            <p>基本料金は６万円となります。</p>
            <p>別途公証人手数料が必要となります。</p>
        </div>
      )
    }
  ]
};

export const PROCESS_STEPS: ProcessStep[] = [
    {
        step: '01',
        title: 'お問い合わせ',
        description: 'まずはお電話またはお問い合わせフォームより、お気軽にご連絡ください。初回相談は無料です。',
    },
    {
        step: '02',
        title: '無料相談・お見積り',
        description: '当事務所にお越しいただくか、オンラインにて現状やお悩みをお伺いします。最適なプランとお見積りをご提案します。',
    },
    {
        step: '03',
        title: 'ご契約',
        description: 'ご提案内容とお見積りにご納得いただけましたら、ご契約となります。契約内容を丁寧にご説明します。',
    },
    {
        step: '04',
        title: '業務開始',
        description: 'ご契約内容に基づき、業務を開始いたします。お客様のビジネスの成長を全力でサポートさせていただきます。',
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        text: "前の税理士さんは年に一度しか会えず、相談もしづらかったのですが、TKSさんにしてからは密にコミュニケーションが取れ、経営判断のスピードが上がりました。",
        author: "IT業・30代・法人",
    },
    {
        text: "会社設立から融資まで、何から手をつければいいか分からない状態でしたが、一から十まで丁寧にサポートしていただき、無事に事業をスタートできました。",
        author: "飲食業・40代・法人",
    },
    {
        text: "クラウド会計を導入したことで、経理の手間が大幅に削減されました。もっと早く相談すればよかったです。数字がリアルタイムで見えるのも安心です。",
        author: "小売業・30代・個人事業主",
    },
];

export const FAQ_ITEMS: FAQItem[] = [
    {
        question: '相談は本当に無料ですか？',
        answer: 'はい、初回のご相談は60分間無料です。お客様の状況を詳しくお伺いし、最適なプランをご提案させていただきますので、お気軽にお問い合わせください。',
    },
    {
        question: '税理士を変更したいのですが、手続きは大変ですか？',
        answer: 'ご安心ください。データの引き継ぎなども含め、当事務所が主導してスムーズに移行できるようサポートいたします。お客様に行っていただく作業は最小限です。',
    },
    {
        question: 'クラウド会計ソフトを使ったことがないのですが、大丈夫ですか？',
        answer: '全く問題ありません。当事務所ではクラウド会計の導入から操作方法まで、丁寧にサポートいたします。経理業務が大幅に効率化できますので、ぜひご検討ください。',
    },
    {
        question: '青色申告にすると、何がそんなに良いのですか？',
        answer: '青色申告の最大のメリットは、最大65万円の「青色申告特別控除」が受けられる点です。これにより課税される所得が減り、税金が大幅に安くなります。例えば税率30%の方なら約19万円も納税額を抑えられます。その他にも、赤字を3年間繰り越せたり、家族への給与を経費にできたりと、多くのメリットがあります。',
    },
    {
        question: '所沢市以外でも対応可能ですか？',
        answer: 'はい、対応可能です。Zoomなどのオンラインツールを活用し、全国のお客様に対応しております。遠方のお客様もお気軽にご相談ください。',
    },
    {
        question: '土日や夜間でも相談できますか？',
        answer: 'はい、事前にご予約いただければ、土日や夜間のご相談にも柔軟に対応しております。お忙しい経営者様でも安心してご相談いただけます。',
    },
    {
        question: '相続税の申告はいつまでに必要ですか？',
        answer: '相続の開始があったことを知った日（通常は亡くなった日）の翌日から10か月以内に行う必要があります。申告と納税の両方をこの期間内に済ませる必要があり、遅れるとペナルティが発生する可能性があります。',
    },
    {
        question: '遺言書は作った方が良いですか？',
        answer: 'はい、作成しておくことを強くお勧めします。遺言書がない場合、法律で定められた相続人全員で遺産の分け方を話し合う「遺産分割協議」が必要になり、時として争いの原因となります。遺言書で意思を明確にしておくことで、円満な相続を実現しやすくなります。',
    },
    {
        question: '相続税の税務調査はどのくらいの確率で来ますか？',
        answer: '申告された案件のうち、約10%から20%程度が税務調査の対象になると言われています。特に、申告内容に不備がある場合や、財産額が大きい場合に調査の可能性が高まります。当事務所では、税務調査にも耐えうる、書面添付制度を活用した質の高い申告書を作成します。',
    },
    {
        question: '税務調査の連絡が来たらどうなりますか？',
        answer: 'ご安心ください。当事務所が申告を代行する場合「税務代理権限証書」を提出しますので、税務調査の連絡はまず当事務所に入ります。お客様に直接連絡がいくことはありません。私たちが窓口となり、調査の事前準備から当日の立会いまで、すべてサポートいたします。',
    },
];

// --- NEWS & TOPICS (Updated from source site) ---
export const NEWS_ITEMS: NewsItem[] = [
    { date: '2021.10.22', category: 'お知らせ', title: '税理士法人化し「TKS税理士法人」となりました。', link: '#' },
    { date: '2013.01.04', category: 'お知らせ', title: '国税庁の確定申告特集ページ（平成24年分）が公開されました。', link: '#' },
    { date: '2012.11.01', category: 'お知らせ', title: 'Google+ページを開設しました。', link: '#' },
    { date: '2012.10.01', category: 'お知らせ', title: 'サブホームページ（相続・確定申告）を公開しました。', link: '#' },
];

// --- RECRUITMENT INFO (Updated) ---
export const RECRUITMENT_INFO = {
    status: 'TKS税理士法人 短時間勤務社員 募集中',
    message: '短時間勤務（週３・４日で１日６時間程度、各種社保加入可）で申告書作成業務・外回りが可能な経験者は常に募集しております。',
    email: 'smzkaikei@gmail.com'
};

// --- INHERITANCE GUIDE CONTENT (Updated) ---
export const INHERITANCE_GUIDE_CONTENT: ContentPage = {
  id: 'inheritance-guide',
  mainIcon: <BookOpenIcon className="h-10 w-10 text-emerald-600" />,
  title: '税理士が教える相続対策',
  subtitle: '相続税は、事前の準備と専門家の知識で大きく変わります。',
  sections: [
    {
      title: '相続税申告、誰に頼んでも同じだと思っていませんか？',
      content: (
        <p className="leading-relaxed">
          相続税の申告は、税理士であれば誰でも対応できると思われがちですが、実は非常に高い専門性が求められる分野です。特に、不動産の評価や特例の適用などは、担当する税理士の知識と経験によって納税額が数百万円、時には数千万円単位で変わることも珍しくありません。当事務所は、資産税（相続税・贈与税・譲渡所得税）を最も得意としており、豊富な経験に基づいた最適な申告をサポートします。
        </p>
      )
    },
    {
      title: '相続税がかかるのはどんなとき？【課税割合は上昇傾向】',
      content: (
         <div className="leading-relaxed">
          <p>「うちは大した財産がないから…」と思っていませんか？かつて相続税が課税されるのは全体の4%程度でしたが、平成27年の税制改正で基礎控除額が引き下げられた結果、<strong>現在では約9.6%（令和4年）</strong>と、課税対象となる方が倍以上に増えています。つまり「我が家も対象かもしれない」というケースが増えているのです。</p>
          <p className='mt-3'>相続税は、亡くなった方（被相続人）の遺産総額が「基礎控除額」を超える場合に発生します。基礎控控除額は以下の式で計算されます。</p>
          <p className="my-3 p-4 bg-sky-50 text-sky-800 rounded-lg text-center font-bold">
            基礎控除額 = 3,000万円 + (600万円 × 法定相続人の数)
          </p>
          <p>例えば、相続人が配偶者と子供2人の合計3人だった場合、基礎控除額は4,800万円です。この金額を超えそうな方は、<strong>対策をすれば納税額がゼロになったはずのケース</strong>も多いため、早めの対策を検討しましょう。</p>
        </div>
      )
    },
     {
      title: '知らないと損！納税額を抑える6つの重要ポイント',
      content: (
        <div className="space-y-8 leading-relaxed">
            <div className="p-6 bg-slate-50/50 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg text-emerald-800">① 生命保険の活用</h4>
              <p className="mt-2 text-slate-700">最も手軽で効果的な対策の一つ。死亡保険金は「<strong>500万円 × 法定相続人の数</strong>」まで非課税です。例えば相続人が3人なら1,500万円までが非課税になり、預貯金で遺すよりも有利です。受取人を指定できるため、遺産分割対策としても有効です。</p>
            </div>
            <div className="p-6 bg-slate-50/50 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg text-emerald-800">② 不動産を活用した評価額の引き下げ</h4>
              <p className="mt-2 text-slate-700">現金を不動産に換えることで、相続税評価額を大きく下げることができます。例えば、更地にアパートを建てると「貸家建付地」として土地の評価額が下がり、建物自体の評価額も建築費より低くなります。ただし、空室リスクや資金繰りを考慮した綿密な計画が不可欠です。</p>
            </div>
            <div className="p-6 bg-slate-50/50 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg text-emerald-800">③ 生前贈与の活用</h4>
              <p className="mt-2 text-slate-700">年間<strong>110万円</strong>までの贈与は非課税です。これを毎年続けることで、将来の相続財産を減らせます。ただし、形式だけの贈与（名義預金など）は税務署に否認されるリスクがあるため注意が必要です。他にも、目的に応じた様々な贈与の特例があります。</p>
            </div>
            <div className="p-6 bg-slate-50/50 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg text-emerald-800">④ 小規模宅地等の特例</h4>
              <p className="mt-2 text-slate-700">ご自宅や事業用の土地の評価額を<strong>最大80%減額</strong>できる非常に強力な制度です。例えば1億円の土地が2,000万円の評価になることも。適用要件が非常に複雑なため、専門家の判断が不可欠です。</p>
            </div>
            <div className="p-6 bg-slate-50/50 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg text-emerald-800">⑤ 養子縁組の活用</h4>
              <p className="mt-2 text-slate-700">養子を迎えると法定相続人が増え、基礎控除額や生命保険の非課税枠が増加します。二次相続まで見据えた対策としても有効です。ただし、他の相続人との関係や、孫を養子にした場合の相続税2割加算など、慎重な検討が必要です。</p>
            </div>
             <div className="p-6 bg-slate-50/50 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg text-emerald-800">⑥ 配偶者の税額軽減と二次相続対策</h4>
              <p className="mt-2 text-slate-700">配偶者が相続した遺産は、法定相続分または<strong>1億6,000万円</strong>までは相続税がかかりません。しかし、一次相続でこの特例を最大限使うと、二次相続（残された配偶者の相続）で子供たちの税負担が重くなることがあります。家族全体の納税額を最小化する視点が重要です。</p>
            </div>
        </div>
      )
    },
    {
      title: 'まずはお気軽にご相談ください',
      content: (
        <p className="leading-relaxed">
          当事務所では、初回のご相談を無料で承っております。「相続税がかかるか分からない」「何から始めたら良いか分からない」といった漠然としたご不安でも構いません。お客様の状況を丁寧にお伺いし、最善の道筋をご提案いたします。
        </p>
      )
    },
  ]
};

// --- TAX RETURN GUIDE CONTENT (Updated with old site content) ---
export const TAX_RETURN_GUIDE_CONTENT: ContentPage = {
  id: 'tax-return-guide',
  mainIcon: <DocumentChartBarIcon className="h-10 w-10 text-indigo-600" />,
  title: 'お任せください確定申告',
  subtitle: '面倒な確定申告は、プロに任せて時間と安心を手に入れましょう。',
  notice: (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
          <p className="text-red-700 font-semibold">{NEW_CLIENT_NOTICE}</p>
      </div>
  ),
  sections: [
    {
      title: '確定申告、ご自身でやりますか？税理士に任せますか？',
      content: (
        <div className="leading-relaxed">
            <p>
            確定申告は、会計ソフトの進化によりご自身で申告することも十分可能です。しかし、<strong>「白色申告のままになっている」「事業の規模が大きくなってきた」</strong>という方は、一度税理士に相談することをお勧めします。報酬以上の節税メリットを得られるケースが多いためです。
            </p>
            <p className='mt-3'>
            当事務所では、青色申告でも白色申告でも報酬は変わりません。お客様の状況に合わせ、最適な申告方法をご提案します。
            </p>
        </div>
      )
    },
    {
      title: '青色申告で大きな節税メリットを',
      content: (
         <div className="leading-relaxed">
          <p>報酬以上に節税ができる可能性があります。例えば、税率が30%の方が白色申告から<strong>65万円控除の青色申告</strong>に切り替えるだけで、<strong>約19万円もの節税</strong>につながります。これだけで、税理士報酬の元が取れてしまうケースも少なくありません。</p>
          <p className='mt-3'>当事務所では、節税効果を最大化するためのアドバイスはもちろん、面倒な帳簿作成から代行いたしますのでご安心ください。ファイナンシャルプランナーの資格も持つ代表が、総合的な視点からアドバイスいたします。</p>
        </div>
      )
    },
     {
      title: '安心の税務調査対応',
      content: (
        <div className="leading-relaxed">
            <p>
            「税務調査の連絡が来たらどうしよう…」とご不安な方も多いかもしれません。当事務所が確定申告を代行する場合、<strong>「税務代理権限証書」</strong>を添付して提出します。
            </p>
            <p className='mt-3'>
            これにより、税務署からの問い合わせはまず当事務所に入りますので、お客様に突然連絡がいくことはありません。また、申告内容の信頼性を高める<strong>「書面添付制度」</strong>を活用することで、税務調査自体が省略される可能性も高まります。
            </p>
        </div>
      )
    },
    {
      title: '低価格で安心の料金設定',
      content: (
        <p className="leading-relaxed">
          当事務所の確定申告報酬は、<a href="#pricing" className="text-sky-700 hover:underline font-semibold">料金プラン</a>の通り、年間売上高に応じた明瞭な価格設定となっております。税理士に依頼するのが初めてという方でも、安心してご依頼いただけます。
        </p>
      )
    },
  ]
};

// --- ACCOUNTANT CHOICE GUIDE CONTENT (Renamed from GUIDE_CONTENT) ---
export const ACCOUNTANT_CHOICE_GUIDE_CONTENT = {
  title: '失敗しない税理士の選び方',
  subtitle: '特に相続税申告における会計事務所選びのポイントをご紹介します。',
  sections: [
    {
      title: 'ポイント①：料金が安いか',
      content: (
        <div className="space-y-3 leading-relaxed">
          <p>税理士報酬は決して安いものではありません。しかし、事務所の規模やサービス内容によって料金は大きく異なります。当事務所のように、少数精鋭でITを駆使して効率化を図っている事務所は、比較的リーズナブルな料金設定が可能です。</p>
          <p>料金だけで判断するのは危険ですが、複数の事務所から見積もりを取り、サービス内容と料金のバランスを比較検討することが重要です。</p>
        </div>
      )
    },
    {
      title: 'ポイント②：相続税専門または資産税に強いか',
      content: (
        <div className="space-y-3 leading-relaxed">
          <p>相続税申告は、税理士の経験と知識によって納税額に数百万円、場合によっては数千万円の差が出ることがあります。特に土地の評価などは非常に専門性が高い分野です。</p>
          <p>「相続税専門」を謳っている、またはホームページで相続税の実績を豊富に掲載している税理士を選ぶことが、損をしないための絶対条件と言えます。当事務所は資産税（相続税・贈与税・譲渡所得税）を得意分野としております。</p>
        </div>
      )
    },
    {
      title: 'ポイント③：若くてフットワークが軽いか',
      content: (
        <div className="space-y-3 leading-relaxed">
          <p>税理士業界も高齢化が進んでいます。ベテラン税理士の経験も貴重ですが、新しい税制やITツールへの対応力、そして何よりフットワークの軽さでは若い税理士に分があります。</p>
          <p>特に相続手続きでは、金融機関や役所など、様々な場所へ出向く必要があります。迅速かつ柔軟に対応してくれる若い税理士は、心強いパートナーとなるでしょう。</p>
        </div>
      )
    },
    {
      title: 'ポイント④：説明が丁寧で分かりやすいか',
      content: (
        <div className="space-y-3 leading-relaxed">
          <p>専門用語ばかりで説明されても、内容が理解できなければ意味がありません。お客様の目線に立ち、難しい内容をかみ砕いて丁寧に説明してくれる税理士を選びましょう。</p>
          <p>初回の無料相談などで、実際に話してみて「この人なら信頼できる」「相談しやすい」と感じるかどうか、フィーリングも大切な判断基準です。</p>
        </div>
      )
    }
  ]
};

// --- PRIVACY POLICY CONTENT (New Structure) ---
export const PRIVACY_POLICY_CONTENT: PrivacyPolicyContent = {
    title: 'プライバシーポリシー',
    content: (
      <>
        <p>{FIRM_NAME}（以下「当事務所」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>
        <p>当事務所は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・従業員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
        <p>お客さまからお預かりした個人情報は、当事務所からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
        <p>当事務所は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
        <ul className="list-disc list-inside space-y-1 my-2">
            <li>お客さまの同意がある場合</li>
            <li>お客さまが希望されるサービスを行なうために当事務所が業務を委託する業者に対して開示する場合</li>
            <li>法令に基づき開示することが必要である場合</li>
        </ul>
        <p>当事務所は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
        <p>ご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>
        <p>当事務所は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
      </>
    ),
    contact: {
        line1: '当事務所の個人情報の取扱に関するお問い合せは下記までご連絡ください。',
        line2: `${FIRM_NAME}  TEL: ${FIRM_PHONE}`
    }
}

// --- TAX TOPICS CONTENT (Fully Updated with Nested Content) ---
export const TAX_TOPICS_CONTENT: TaxTopicsContent = {
    title: '税務豆知識',
    subtitle: '税務や節税に関する豆知識を紹介していきます。\n知っていると得することもありますので、ぜひ一度ご覧下さい。',
    categories: [
        {
            categoryTitle: '各種税金について',
            items: [
                { 
                    title: '所得税', 
                    subItems: [
                        {
                            title: '◆ 青色申告について ◆',
                            subItems: [
                                {
                                    title: '１．青色申告における６５万円控除',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>青色申告特別控除65万円の適用を受けるには、以下の要件をすべて満たす必要があります。</p>
                                        <ul className="list-disc pl-5">
                                            <li>不動産所得または事業所得を生ずべき事業を営んでいること。</li>
                                            <li>これらの所得に係る取引を正規の簿記の原則（一般的には複式簿記）により記帳していること。</li>
                                            <li>確定申告書に貸借対照表及び損益計算書を添付し、法定申告期限内に提出すること。</li>
                                            <li>e-Taxによる申告（電子申告）または電子帳簿保存を行うこと。</li>
                                        </ul>
                                        <p>e-Taxを利用しない場合の控除額は55万円となります。</p>
                                    </div>
                                },
                                {
                                    title: '２．事業的規模について',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>不動産貸付が「事業」として行われているかどうかは、社会通念上「事業」と称するに至る程度の規模で行われているかどうかで判定します。</p>
                                        <p>形式基準として、いわゆる「5棟10室基準」があります。これは、貸家であれば5棟以上、アパート等であれば10室以上であれば、原則として事業的規模と認められるというものです。</p>
                                        <p>事業的規模と認められると、青色申告65万円控除の適用や、青色事業専従者給与の必要経費算入などのメリットがあります。</p>
                                    </div>
                                },
                                {
                                    title: '※参考※共有している場合(１０室を３人で共有等)',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>共有物件の場合、各共有者の持ち分に関わらず、全体の貸付状況（棟数・室数）で事業的規模かどうかを判断します。</p>
                                        <p>例えば、10室のアパートを3人で共有している場合、アパート全体で10室基準を満たしているため、共有者それぞれが事業的規模として扱われます。</p>
                                    </div>
                                },
                                {
                                    title: '３．修正申告・期限後申告における特別控除額',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>青色申告特別控除の65万円（または55万円）控除は、法定申告期限内に申告書を提出することが要件です。</p>
                                        <p>したがって、期限後申告や修正申告では、これらの控除は適用できず、控除額は10万円となります。期限内の申告が非常に重要です。</p>
                                    </div>
                                }
                            ]
                        },
                        {
                            title: '◆ 減価償却について ◆',
                            subItems: [
                                {
                                    title: '１．転勤により自宅を貸す場合',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>転勤などでそれまで住んでいた自宅を賃貸に出す場合、その建物は事業用資産となり減価償却の対象となります。</p>
                                        <p>減価償却費の計算の基礎となる取得価額は、建物の購入代金から、居住用として使用していた期間の価値の減少分（非業務用の減価償却費相当額）を差し引いて計算します。耐用年数も事業用として再計算する必要があります。</p>
                                    </div>
                                },
                                {
                                    title: '２．相続により取得した固定資産',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>相続によって取得した減価償각資産は、被相続人（亡くなった方）の取得価額や取得時期、未償却残高を引き継ぎます。</p>
                                        <p>例えば、被相続人が新築で建てたアパートを相続した場合、相続人はその新築時の取得価額を基に減価償却計算を行うことになります。</p>
                                    </div>
                                },
                                {
                                    title: '３．相続の場合の月数按分',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>相続が発生した年の減価償却費は、被相続人の準確定申告と、相続人の確定申告で、月数按分して計上します。</p>
                                        <p>具体的には、その年の1月1日から亡くなる日までの月数を被相続人の経費とし、相続開始日から年末までの月数を相続人の経費として計算します。</p>
                                    </div>
                                }
                            ]
                        }
                    ]
                },
                { 
                    title: '法人税',
                    subItems: [
                        {
                            title: '◆ 役員給与等について ◆',
                            subItems: [
                                {
                                    title: '１．役員給与の損金不算入',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>法人税法上、役員給与は原則として損金（経費）に算入されません。ただし、以下の3種類の給与は、損金算入が認められます。</p>
                                        <ul className="list-disc pl-5">
                                            <li><strong>定期同額給与：</strong>毎月同額で支給される給与</li>
                                            <li><strong>事前確定届出給与：</strong>事前に税務署へ届け出た金額・時期に支給される賞与など</li>
                                            <li><strong>業績連動給与：</strong>利益の状況を示す指標を基礎として算定される給与（主に上場企業向け）</li>
                                        </ul>
                                        <p>これら以外の役員給与は、たとえ支給されても法人税の計算上は経費として認められないため、注意が必要です。</p>
                                    </div>
                                },
                                {
                                    title: '２．過大な使用人給与',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>役員の親族など、特殊な関係にある使用人に対して支払う給与が、その職務内容や他の使用人の給与と比較して不相当に高額である場合、その過大な部分は役員給与とみなされ、損金不算入となることがあります。</p>
                                        <p>給与額の設定には、客観的な妥当性が求められます。</p>
                                    </div>
                                },
                                {
                                    title: '３．使用人賞与の損金算入時期',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>使用人に対する賞与は、実際に支払った日の属する事業年度に損金算入するのが原則です。しかし、以下の要件を満たす場合は、未払いの状態でもその事業年度の損金とすることができます。</p>
                                        <ul className="list-disc pl-5">
                                            <li>決算日までに賞与の支給額を各人別に通知していること。</li>
                                            <li>決算日までに、その通知した金額を全額、未払金として計上していること。</li>
                                            <li>その事業年度終了の日の翌日から1か月以内に、通知した金額を全額支払っていること。</li>
                                        </ul>
                                    </div>
                                },
                            ]
                        },
                        {
                            title: '◆ 交際費について ◆',
                            subItems: [
                                {
                                    title: '・他の経費との区別',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>交際費とは、得意先や仕入先その他事業に関係のある者等に対する接待、供応、慰安、贈答その他これらに類する行為のために支出する費用をいいます。広告宣伝費や福利厚生費、会議費など、他の経費との区別が重要になります。</p>
                                        <p>特に、一人あたり5,000円以下の飲食費は、一定の事項を記載した書類を保存することを条件に、交際費から除外して全額を損金にすることができます。</p>
                                    </div>
                                }
                            ]
                        },
                        {
                            title: '◆ 寄付金について ◆',
                            subItems: [
                                {
                                    title: '・法人税法上の考え方',
                                    content: <div className="space-y-2 text-sm leading-relaxed">
                                        <p>寄付金とは、金銭や資産を事業とは直接関係なく無償で供与した場合の費用のことです。法人税法上、寄付金は損金に算入できる金額に上限（損金算入限度額）が設けられています。</p>
                                        <p>ただし、国や地方公共団体に対する寄付金や、財務大臣が指定した寄付金（指定寄付金）は、全額を損金に算入することができます。</p>
                                    </div>
                                }
                            ]
                        }
                    ]
                },
                { 
                    title: '相続税・贈与税',
                    subItems: [
                        {
                            title: '１．相続時精算課税制度',
                            content: <div className="space-y-2 text-sm leading-relaxed">
                                <p>原則として60歳以上の親または祖父母から、18歳以上の子または孫に対して財産を贈与する場合に選択できる制度です。</p>
                                <p>この制度を選択すると、2,500万円までの贈与には贈与税がかかりません（特別控除）。2,500万円を超えた部分には一律20%の贈与税が課されます。そして、贈与した人が亡くなった時に、この制度で贈与した財産を相続財産に加算して相続税を計算し、既に支払った贈与税額を精算（控除）します。</p>
                                <p>令和6年からは、この特別控除とは別に、年間110万円の基礎控除が創設され、より使いやすくなりました。</p>
                            </div>
                        },
                        {
                            title: '２．直系尊属から住宅取得等資金の贈与を受けた場合の非課税',
                            content: <div className="space-y-2 text-sm leading-relaxed">
                                <p>子や孫が、親や祖父母などの直系尊属から、自分が住むための家屋の新築、取得または増改築等のための資金（住宅取得等資金）の贈与を受けた場合に、一定の要件を満たせば、贈与税が非課税となる制度です。</p>
                                <p>非課税限度額は、省エネ等住宅の場合は1,000万円、それ以外の住宅の場合は500万円です（令和5年12月31日までの贈与）。この制度は、暦年課税の基礎控除110万円と併用できます。</p>
                            </div>
                        }
                    ]
                },
                { 
                    title: '消費税',
                    subItems: [
                        {
                            title: '１．課税事業者・免税事業者',
                            content: <div className="space-y-2 text-sm leading-relaxed">
                                <p>消費税を納める義務がある法人や個人事業者を「課税事業者」、納める義務が免除されている事業者を「免税事業者」といいます。</p>
                                <p>原則として、基準期間（個人事業者は前々年、法人は前々事業年度）の課税売上高が1,000万円以下の事業者は免税事業者となります。ただし、インボイス制度の開始に伴い、免税事業者であっても取引先から求められてインボイス発行事業者（課税事業者）になるケースが増えています。</p>
                            </div>
                        },
                        {
                            title: '２．簡易課税制度',
                            content: <div className="space-y-2 text-sm leading-relaxed">
                                <p>中小事業者の納税事務負担を軽減するために設けられた制度です。基準期間の課税売上高が5,000万円以下の事業者が、事前に届出をすることで選択できます。</p>
                                <p>この制度では、預かった消費税額に、事業の種類ごとに定められた「みなし仕入率」を乗じて仕入税額控除を計算します。実際の仕入経費を集計する必要がないため、計算が簡便になります。</p>
                            </div>
                        },
                        {
                            title: '３．課税売上割合',
                            content: <div className="space-y-2 text-sm leading-relaxed">
                                <p>課税売上割合とは、その事業年度の総売上高に占める課税売上高（消費税がかかる取引の売上高）の割合をいいます。</p>
                                <p>この割合が95%以上で、かつ、課税売上高が5億円以下の場合、支払った消費税の全額を控除できます（全額控除）。しかし、95%未満の場合や課税売上高が5億円を超える場合は、控除できる消費税額の計算が複雑になります（個別対応方式または一括比例配分方式）。</p>
                            </div>
                        }
                    ]
                },
                { 
                    title: 'その他の税金',
                    content: <div className="space-y-2 text-sm leading-relaxed">
                        <p>事業を行っていると、所得税や法人税、消費税以外にも様々な税金が関わってきます。</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>印紙税：</strong>契約書や領収書など、法律で定められた課税文書を作成した場合に課される税金です。文書の種類や記載金額によって税額が変わります。</li>
                            <li><strong>登録免許税：</strong>不動産の登記や会社の設立登記など、登記・登録・免許などを受ける際に課される税金です。</li>
                            <li><strong>固定資産税・都市計画税：</strong>毎年1月1日時点で土地や家屋、事業用の償却資産を所有している場合に、その資産が所在する市町村から課される税金です。</li>
                        </ul>
                    </div>
                },
            ]
        }
    ],
    other: {
        title: 'その他コラム',
        subtitle: 'これまで、税務・会計に携わって来た中で培われた、個人的な意見をUPしました。',
        items: [
            { 
                title: '税理士の選び方 ① ～ 個人・法人～', 
                content: <div className="space-y-4 text-sm leading-relaxed">
                  <p>｢小さな怪我は町のお医者さん、大きな病気は大学病院などの大病院｣これは税理士にも共通して言えます。 それぞれ得意分野があり、様々な特徴があります。</p>
                  <div>
                    <h4 className="font-bold mt-3">◆小規模な飲食店・美容室等 (会計・税務の難易度が低い業種)</h4>
                    <p className="pl-4">→報酬で税理士を選ぶのも一理あるでしょう。数万円の節税の為に数十万円も報酬払っていては無意味ですしね。 ただいくら零細であっても節税方法はありますので明らかに酷い場合はヤメましょう。</p>
                  </div>
                  <div>
                    <h4 className="font-bold mt-3">◆利益がほとんど出ない会社で資金繰りに問題はない会社</h4>
                    <p className="pl-4">→これも報酬で選んで問題ないと思います。ただし資金繰りが厳しい場合はきちんと対応できる税理士である必要 があります。</p>
                  </div>
                  <div>
                    <h4 className="font-bold mt-3">◆中小企業である建設業など</h4>
                    <p className="pl-4">→その道に経験豊富な中堅税理士がお勧めです。資金繰りの対応も得意な場合が多いです。</p>
                  </div>
                   <div>
                    <h4 className="font-bold mt-3">◆利益が大きい会社・海外との取引が多い会社</h4>
                    <p className="pl-4">→中堅から大手会計事務所がお勧めです。報酬に見合うアドバイスを得られると思います。</p>
                  </div>
                </div>
            },
            { 
                title: '税理士の選び方 ② ～ 相続税 ～', 
                content: <div className="space-y-4 text-sm leading-relaxed">
                    <p>相続税の申告は選び方①のお医者さんで言うところの外科手術みたいなものです。 経験のある者以外に依頼するのはとても危険なことです。</p>
                    
                    <div>
                        <h4 className="font-bold text-base mt-4 mb-2">◆多くの税理士が相続税が苦手◆</h4>
                        <p>相続税の納税者は全体の４％であることから相続税の申告件数はあまり多くありません。 このことから、小規模な事業者相手を対象とした税理士の中には相続税の申告経験がない者もいます。</p>
                        <p>しかし、会計事務所の看板に｢私は相続税はできません｣などと書いてはいませんので、納税者の方は 当然に相続税の申告もできると思うでしょう。</p>
                        <p>所得税や法人税ならまだしも、相続税に関しては無知な税理士に依頼するのは絶対にやめましょう。 ちょっとしたことで数百万、下手すると数億円変わるケースもあります。</p>
                        <p>実際に小規模宅地の評価減をしていない申告書や借地権分を差し引かない申告書を見たことがあります。 更正の嘆願で借地権の減額は認められましたが、小規模宅地は当初申告での適用が必要な為、認められませんでした。 借地権の方で１千万円以上の還付となりました。小規模宅地の方は５百万ほど相続税の減額ができたはずでしたが 税理士の知識不足により、多く納税してしまいました。</p>
                        <p>納税者は訴えませんでしたが、税理士賠償請求の対象になりかねない酷い申告書でした。</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-base mt-4 mb-2">◆相続税の申告を依頼すべき税理士◆</h4>
                        <p>相続税の経験豊富な税理士に依頼すべきです。ただし相続財産の規模によってはさらに注意すべき点があります。</p>
                        <ul className="list-decimal pl-5 mt-2 space-y-2">
                            <li>
                                <strong>相続税の額が大きい場合</strong>
                                <p className="pl-2">→大手の資産税専門の会計事務所</p>
                            </li>
                            <li>
                                <strong>相続税の額が小さい又は０円</strong>
                                <p className="pl-2">→相続税の申告経験がある事務所</p>
                            </li>
                            <li>
                                <strong>土地が多く、広大地評価ができるか微妙な土地もある場合等</strong>
                                <p className="pl-2">→大手資産税専門の会計事務所</p>
                            </li>
                        </ul>

                        <div className="mt-4 p-3 bg-slate-100 rounded">
                            <h5 className="font-bold text-center">↑ ＜ 上 記 の 解 説 ＞ ↑</h5>
                            <div className="mt-2 space-y-2">
                                <p><strong>①・②について・・・</strong><br/>
                                相続税の額が大きい場合は、経験量が圧倒的な資産税専門とされる税理士をお薦めします。 この場合大抵が報酬が高めの設定となっております。しかし報酬の数倍の節税となりますし、徹底的な調査をするのでとても安心できます。 ②のような場合は、節税策が薄いので報酬で選ぶのも一つと考えられます。また大手はミスが許されない為、非常に細かく調査します。時には税務署が発見できなそうなものまで調査することもありえます。小さい事務所は良い意味でアバウトなので運がよければ税務調査でパスする可能性も秘めています。（当然、脱税を指南するような税理士に依頼するのはやめましょう。また経験がない税理士に依頼するのも危険です。 ）
                                </p>
                                <p><strong>③について・・・</strong><br/>
                                土地の評価は様々な減額の補正があります。特に広大地評価は大きく税金を減額できる為、非常に有効です。 ただし評価できる要件が色々ありますので微妙な場合は慎重な判断が必要となります。経験豊富な大手が無難と考えられます。</p>
                            </div>
                        </div>
                        <p className="mt-4">ちなみに清水会計事務所は相続税の申告経験が豊富で相続税が得意な事務所です。①と②の中間といったところでしょうか。</p>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-base mt-4 mb-2">（２）相続税申告についての会計事務所の特徴</h4>
                        
                        <div className="mt-2 space-y-3">
                            <div>
                                <h5 className="font-semibold text-sky-800">① 資産税専門の大手（相続専門）</h5>
                                <p className="font-bold mt-1">◆ 長所 ◆</p>
                                <p className="pl-4">・圧倒的な経験 ・徹底的な調査 ・ミスが少ない</p>
                                <p className="font-bold mt-1">◆ 短所 ◆</p>
                                <p className="pl-4">・報酬が高い ・細かすぎる ・調査時に担当が居ない可能性あり</p>
                            </div>
                            <div>
                                <h5 className="font-semibold text-sky-800">② 相続税の申告ができる事務所</h5>
                                <p className="font-bold mt-1">◆ 長所 ◆</p>
                                <p className="pl-4">・報酬が手頃 ・良い意味でアバウト</p>
                                <p className="font-bold mt-1">◆ 短所 ◆</p>
                                <p className="pl-4">・大きい案件は微妙 ・申告ミスがある</p>
                            </div>
                             <div>
                                <h5 className="font-semibold text-sky-800">③ 相続税の申告が苦手な事務所</h5>
                                <p className="pl-4">百害あって一理なし</p>
                            </div>
                        </div>
                    </div>
                </div>
            },
            { 
                title: '税理士等の士業について', 
                content: <div className="space-y-4 text-sm leading-relaxed">
                  <p>士業とは弁護士、会計士、税理士、司法書士etcなど後ろに士が付く専門職のことです。 これらの職の多くは資格を取得することによりその業を行うことができ、その為に猛勉強を行います。 しかし勉強をしたとしても実務と内容が乖離することも多く、実務の知識の方が仕事上大切になってきます。</p>
                  <p>これらの資格はどの資格も守備範囲が広い為、ある分野が得意になっていきます。弁護士なら民事訴訟が強い弁護士、 刑事訴訟が強い弁護士など。｢行列ができる法律相談所｣でたまに弁護士が意味不明なことを言うケースもこのせいです。</p>
                  <p>税理士も法人税・所得税・相続税・消費税と様々な税法があり、また法人の規模も様々であり、得意不得意がで てきてしまいます。特に相続税は発生件数も多くないことから苦手な税理士が多い現状です。</p>
                  <p>とは言え｢私は相続税が苦手です。｣などと看板に書けませんから、納税者の方は税理士なら税金はなんでも知ってる などと考え依頼してしまう可能性もあります。相続税は税率も高く、相続税を知らない税理士に頼んでは大変危険です。 他にも消費税は平成になってできた税法ですから年配の方で苦手な方は多くいます。消費税で損害賠償請求される 税理士も多くいます。</p>
                  <p>つまり士業の人を完全に信用してはならないと言うことです。特に税理士や会計士は特定の大学院へ行ったりすれば 簡単に資格を取得することができます。｢税理士≠税金が詳しい人｣ということです。</p>
                  <p>こんなことを言っていたら税理士会に叱られる可能性がありますが、実際そうなので仕方ありません。</p>
                </div>
            }
        ]
    }
}
import {
    FaRegCirclePlay,
    LuBookDown,
    MdOutlineBook,
    MdOutlineQuiz,
} from "@/components/Icons/Icons";
import {
    AiOutlineDashboard,
    CiBadgeDollar,
    CiSettings,
    IoAnalytics,
    IoChatbubbleEllipsesOutline,
    IoInformationCircleOutline,
    IoMdBook,
    IoWalletOutline,
    BsFileEarmarkPdf
} from "@/assets/Icons";
import { TbAdjustmentsQuestion } from "react-icons/tb";
import {
    totlaCourseIcon,
    totalSalesIcon,
    totalEnrollIcon,
    totalStudentIcon,
} from "@/assets/assets";
export const NavLinks = [
    {
        id: 1,
        name: "Evaluation Plans",
        path: "#",
    },
    {
        id: 2,
        name: "Prelims",
        path: "/prelims",
    },
    {
        id: 3,
        name: "Mentered Answer Writing",
        path: "",
    },
    {
        id: 4,
        name: "Notes",
        path: "",
    },
    {
        id: 5,
        name: "Video Courses",
        path: "",
    },
    {
        id: 6,
        name: "PYQ",
        path: "",
    },
    {
        id: 7,
        name: "Toppers Copies",
        path: "",
    },
    {
        id: 8,
        name: "Contact Us",
        path: "",
    },
    {
        id: 9,
        name: "Toppers` Reviews",
        path: "",
    },
];

export const prelimsTabData = [
    {
        title: "UPSC CSE- Prelims",
        path: "#",
    },
    {
        title: "KAS- Prelims",
        path: "#",
    },
];

export const courseList = [
    {
        title: "KAS Prelims Combo",
        tabKey: "UPSC CSE - Prelims",
        subTitle: "Lakshya 2.0 + Parishram + Karnataka Budget Notes",
        price: "Free",
        oldPrice: null,
        likes: "19",
        isPaid: false,
        buttonText: "View Details",
    },
    {
        title: "KAS Prelims Combo",
        tabKey: "KAS - Prelims",
        subTitle: "Lakshya 2.0 + Parishram + Karnataka Budget Notes",
        price: "₹2700",
        oldPrice: "₹5999",
        likes: "19",
        isPaid: true,
        buttonText: "View Details & Subscribe",
    },
];

export const FeaturesList = [
    {
        name: "Live Classes",
        icon: <FaRegCirclePlay size={28} className="ntext-brand" />,
        label: "free",
        isLive: true,
    },
    {
        name: "Live Test & Quizzes",
        icon: <MdOutlineQuiz size={28} className="ntext-brand" />,
        isLive: true,
    },
    {
        name: "Free Quizzes",
        icon: <MdOutlineBook size={28} className="ntext-brand" />,
        label: "New",
        labelColor: "#75cd25",
    },
    {
        name: "Prev. Year Papers",
        icon: <LuBookDown size={28} className="ntext-brand" />,
    },
];

export const AllTestDataList = [
    // {
    //     label: 'Free',
    //     name: 'Liberin-Test-1',
    //     rank: 9158,
    //     total: 1653,
    //     makrObtain: 4,
    //     totalMark: 65,
    //     attemptDate: "Mar 16",
    //     isAttempted: true,
    //     syllabusText: 'Syllabus',
    //     syllabusTextToolTip: 'Placement Test for Liberin',
    //     language: 'English',
    //     reAttempt: 'Reattempt'

    // },
    {
        label: "Free",
        name: "Liberin-Test-1",
        rank: null,
        total: null,
        makrObtain: null,
        totalMark: null,
        attemptDate: "Mar 16",
        isAttempted: false,
        syllabusText: "Syllabus",
        syllabusTextToolTip: "Placement Test for Liberin",
        language: "English",
        reAttempt: "",
    },
];
export const quizList = {
    title: "Sample Quiz",
    questions: [
        {
            id: 1,
            question: `If  then find the value of 'x'`,
            options: ["London", "Berlin", "Paris", "Madrid"],
            correctAnswer: "Paris",
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Jupiter", "Venus", "Mercury"],
            correctAnswer: "Mars",
        },
        {
            id: 3,
            question: "Who painted the Mona Lisa?",
            options: [
                "Pablo Picasso",
                "Vincent van Gogh",
                "Leonardo da Vinci",
                "Michelangelo",
            ],
            correctAnswer: "Leonardo da Vinci",
        },
        {
            id: 4,
            question: "What is the powerhouse of the cell?",
            options: [
                "Nucleus",
                "Cytoplasm",
                "Mitochondria",
                "Endoplasmic reticulum",
            ],
            correctAnswer: "Mitochondria",
        },
    ],
};

export const dashboardSalesAnalysis = [
    {
        title: "Total Sales",
        img: totalSalesIcon,
        value: "125k",
    },
    {
        title: "Total Courses",
        img: totlaCourseIcon,
        value: "20",
    },
    {
        title: "Total Students",
        img: totalStudentIcon,
        value: "12k",
    },
    {
        title: "Total Enroll",
        img: totalEnrollIcon,
        value: "15k",
    },
];

// Admin Dashboard nav lnks
export const adminTopRoutes = [
    {
        path: "/dashboard/admin",
        name: "Dashboard",
        icon: <AiOutlineDashboard />,
    },
    {
        path: "/dashboard/admin/test-management",
        name: "Test Management",
        icon: <TbAdjustmentsQuestion />,
    },
    {
        path: "/dashboard/admin/quiz-management",
        name: "Quiz Management",
        icon: <IoMdBook />,
    },
    {
        path: "/dashboard/admin/mains",
        name: "Mains",
        icon: <BsFileEarmarkPdf />,
    },
    {
        path: "/dashboard/admin/messages",
        name: "Messages",
        icon: <IoChatbubbleEllipsesOutline />,
    },
    {
        path: "/dashboard/admin/analysis",
        name: "Analysis",
        icon: <IoAnalytics />,
    },
    {
        path: "/dashboard/admin/statemets",
        name: "Statements",
        icon: <CiBadgeDollar />,
    },
];
// Admi ROutes
export const adminBottomRoutes = [
    {
        path: '',
        name: 'info',
        icon: <IoInformationCircleOutline />
    },
    {
        path: '/dashboard/settings',
        name: 'Settings',
        icon: <CiSettings />
    },
]

// =============================================
// =================Student Dasboard Routes================
export const userTopRoutes = [
    {
        path: "/profile",
        name: "Profile",
        icon: <AiOutlineDashboard />,
    },
    {
        path: "/profile/my-courses",
        name: "My Courses",
        icon: <CiBadgeDollar />,
    },
    {
        path: "/profile/mains",
        name: "Mains",
        icon: <BsFileEarmarkPdf />,
    },
    {
        path: "/profile/my-wallet",
        name: "My Wallet",
        icon: <IoWalletOutline />,
    },

    {
        path: "/profile/settings",
        name: "Settings",
        icon: <CiSettings />,
    },
];

export const userBottomRoutes = [
    {
        path: '',
        name: 'info',
        icon: <IoInformationCircleOutline />
    },
    {
        path: '/dashboard/settings',
        name: 'Settings',
        icon: <CiSettings />
    },
]



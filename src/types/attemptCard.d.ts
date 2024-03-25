export interface TestAttemptCard {
    label: string;
    name: string;
    rank: number | null;
    total: number | null;
    makrObtain: number | null;
    totalMark: number | null;
    attemptDate: string;
    isAttempted: boolean;
    syllabusText: string;
    syllabusTextToolTip: string;
    language: string;
    reAttempt: string;
};

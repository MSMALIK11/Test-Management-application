
import Each from "@/components/shared/Each";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AllTestDataList } from "@/data/data";
import type { TestAttemptCard } from "@/types/attemptCard";
import { useNavigate } from "react-router-dom";
const CourseDetails = () => {
    const navigation = useNavigate();

    const onStartClick = () => {
        navigation("/prelims/quize");
    };
    const Pills = () => {
        return (
            <div className="npx-4 ntext-forground nshadow-lg npy-1.5 nbg-secondary  nrounded-full">
                <p className="ntext-forground">Mock Test</p>
            </div>
        );
    };

    const Card = ({
        attemptDate,
        isAttempted,
        makrObtain,
        name,
        rank,
        reAttempt,
        syllabusText,
        total,
        totalMark,
    }: TestAttemptCard) => {
        return (
            <div className=" nborder  lg:nw-[60%] npt-5 nshadow-lg nrounded-lg hover:nscale-105 ntransiton-transform nduration-300">
                <div className="npx-4">
                    <p className="npx-3 nbg-secondary npy-1 ninline-flex ntext-forground nrounded-full  ntext-semibold">
                        Free
                    </p>
                    <div className="nflex  nitems-center njustify-between">
                        <h3>{name}</h3>
                        <div className="nspace-x-4">
                            {isAttempted ? (
                                <div className="nspace-x-4">
                                    <Button
                                        variant={"outline"}
                                    >
                                        Solution
                                    </Button>
                                    <Button

                                        variant={"outline"}
                                    >
                                        Analysis
                                    </Button>
                                </div>
                            ) : (
                                <Button onClick={onStartClick} variant={"secondary"}>
                                    Start
                                </Button>
                            )}
                        </div>
                    </div>
                    {rank && makrObtain && (
                        <div className="nflex ngap-4 ntext-gray-300">
                            <span>
                                {rank}/{total} Rank
                            </span>
                            <span>
                                {makrObtain}/{totalMark} Marks
                            </span>
                        </div>
                    )}
                </div>
                <div className="card-footer nflex njustify-between mitems-center nbg- npx-4 npy-2 nmt-4">
                    <div className="nflex nitems-center ngap-4">
                        <p className=" ninline-flex  ntext-brand ntext-xs">
                            {syllabusText} |{" "}
                        </p>
                        <p className="ntext-xs ntext-forground">Attempted on {attemptDate}</p>
                    </div>
                    <div>
                        <p className="ntext-brand ntext-xs ncursor-pointer">{reAttempt}</p>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div id="course-details-container" className="nbg-background lg:npx-20 md:npx-12 sm:npx-12">
            <div className=" nflex  nh-[300px] " >
                {/* <BreadCrumb /> */}
                <div className="course-banner-info nmt-12 nflex nflex-col  ngap-1.5 nw-full">
                    <h1 className="lg:ntext-4xl ntext-foreground">Liberin Mock Test</h1>
                    <span className="ntext-[10px] ntext-foreground">
                        Last updated on Mar 16, 2024
                    </span>
                    <div className="nflex ngap-2 nitems-center nmt-4">
                        <span className=" ntext-sm ntext-foreground">5 Total Tests |</span>
                        <span className="nbg-secondary npx-2 npy-1 ntext-[10px] nrounded-lg  ">
                            5 FREE TESTS
                        </span>
                    </div>
                    <div className="nw-[30%] nmt-1">
                        <Progress value={50} />
                        <div className="nflex njustify-between nmt-1">
                            <p className="ntext-xs ntext-gray-400">1/5 Tests</p>
                            <p className="ntext-xs ntext-gray-400">20%</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="nmb-6" />
            <div className="npx-7 nmt-6nflex nflex-col  justify-content-center   ">
                <h3 className="ntext-2xl md:ntext-xl sm-ntext-lg">
                    Liberin Mock Test All Tests
                </h3>
                <div className="nflex nmt-4 ngap-4 nitems-center">
                    <Pills />
                    <Pills />
                </div>
                <div className="nmt-4 nspace-y-4  npb-12">
                    <Each
                        of={AllTestDataList}
                        render={(item: TestAttemptCard) => (
                            <Card
                                key={item.name}
                                name={item.name}
                                attemptDate={item.attemptDate}
                                isAttempted={item.isAttempted}
                                label={item.label}
                                language={item.language}
                                makrObtain={item.makrObtain}
                                rank={item.rank}
                                reAttempt={item.reAttempt}
                                syllabusText={item.syllabusText}
                                syllabusTextToolTip={item.syllabusTextToolTip}
                                total={item.total}
                                totalMark={item.total}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;

interface AcademyType {
    index: number;
    iconFinishedOrNot: string,
    typeCourse: string;
    institute: string;
    degree: string;
    concluded: boolean;
    startsAt: string;
    endAt: string;
}

type Academy = AcademyType;

export default Academy;
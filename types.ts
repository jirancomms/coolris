type CCResult<T> = {
    result: boolean;
    message?: string;
    errorCode?: number;
    data?: T;
};

type Member = {
    idx: number;
    id: string;
    name: string;
    nickname: string | null;
    email: string;
    tel: string;
    svc: string;
    parent: number;
    teacher: number;
    intro: string;
    bMentor: number;
    tags: string;
    profileImage: string;
    point: number;
    schoolIdx: number;
    schoolName: string;
    loginSite: string | null;
};

export function nameCheck(name:string):boolean {
    return name !== "" 
}

export function emailCheck(email:string):boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
}

export function passwordCheck(password: string):boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    return passwordRegex.test(password);
}


export function buttonsColor(currentUrl: string, buttonPath: string){
    
    if (currentUrl === buttonPath) {
        return '#0377FF';
    }
    
    return '#262626'
}
export const emailValidation = (email: string, errorText: string): string => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
        return errorText;
    }

    return '';
};

export const nameLatinValiadtion = (name: string, errorText: string): string => {
    const re = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/;

    if (!re.test(String(name).toLowerCase())) {
        return errorText;
    }

    return '';
};

export type Type = 'string' | 'phone' | 'email' | 'options' | 'gender' | 'boolean'

export interface IField{
    key: string;
    label:string;
    placeholder?: string;
    type: Type;
    width: string | number;
    value: string | boolean;
    options?: string[];
    required?: boolean;
}

export const formScheme : {formFields: IField[]} = {
    formFields: [
        {
            key: 'firstName',
            label: 'First Name',
            placeholder: 'First Name',
            type: 'string',
            width: '50%',
            required: true,
            value: ""
        },
        {
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Last Name',
            type: 'string',
            width: '50%',
            required: true,
            value: ""

        },
        {
            key: 'phone',
            label: 'Your Phone Number',
            placeholder: '+972 ...',
            type: 'phone',
            width: '120',
            required: true,
            value:""
        },
        {
            key: 'emailAddress',
            label: 'Your Email Address',
            placeholder: 'myEmail@...',
            type: 'email',
            width: '120',
            required: true,
            value:""
        },
        {
            key: 'gender',
            label: 'Your Gender',
            type: 'gender',
            width: '100%',
            value:""
        },
        {
            key: 'consentApproval',
            label: 'Do you agree to the terms of use?',
            type: 'boolean',
            width: '100%',
            required: true,
            value: false
        },
        {
            key: 'companySize',
            label: 'Please select your company size',
            type: 'options',
            options: ['1-3', '4-20', '20-100', '100-500'],
            width: '50%',
            value:""
        },
    ]
}


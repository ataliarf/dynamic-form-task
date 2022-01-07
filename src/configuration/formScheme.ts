export type Type = 'string' | 'phone' | 'email' | 'options' | 'gender' | 'boolean'

export interface IField{
    key: string;
    label:string;
    placeholder?: string;
    type: Type;
    width: string | number;
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
            width: '0.5',
            required: true
        },
        {
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Last Name',
            type: 'string',
            width: '0.5',
            required: true

        },
        {
            key: 'phone',
            label: 'Your Phone Number',
            placeholder: '+972 ...',
            type: 'phone',
            width: '0.5',
            required: true
        },
        {
            key: 'emailAddress',
            label: 'Your Email Address',
            placeholder: 'myEmail@...',
            type: 'email',
            width: '0.5',
            required: true
        },
        {
            key: 'gender',
            label: 'Your Gender',
            type: 'gender',
            width: '1'
        },
        {
            key: 'consentApproval',
            label: 'Do you agree to the terms of use?',
            type: 'boolean',
            width: '1',
            required: true
        },
        {
            key: 'companySize',
            label: 'Please select your company size',
            type: 'options',
            options: ['1-3', '4-20', '20-100', '100-500'],
            width: '1'
        },
    ]
}


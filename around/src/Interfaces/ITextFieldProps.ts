export interface ITextFieldProps {
    type: string;
    id: string;
    placeholder: string;
    change: (event: React.ChangeEvent) => void;
    value: string;
    error?: boolean;
    helperText?: string | false;
}

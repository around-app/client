export interface ICheckbox {
    id: string;
    checked: boolean;
    change: (event: React.SyntheticEvent) => void;
}

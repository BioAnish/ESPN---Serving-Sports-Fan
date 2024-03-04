export interface IDropdownMenuProps {
    items?: string[];
    blueVariant?: boolean;
    darkTheme?: boolean;
    onSelect?: (selectedItem: string) => void;
}

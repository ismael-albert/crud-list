export interface IFormInput {
    Title: string;
    Content: string;
  }
  export interface IButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type ?: "button" | "submit" | "reset" | undefined;
  }

  export interface IProduct {
      CreatedAt?: string | Date;
      ID: string;
      title: string;
      content: string;
  }

  export interface IConfirmationCardProps {
    title: string;
    content: string;
    onConfirm: () => void;
    onCancel: () => void;
    className?: string;
  }

  export interface IProductFormModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    product?: any; 
    // onSubmit: (data: IFormInput) => void;
  }

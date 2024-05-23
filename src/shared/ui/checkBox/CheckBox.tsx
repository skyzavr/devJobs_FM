import cn from './checkBox.module.css';

type props = {
  title: string;
  checked: boolean;
  onUpdate: () => void;
};

export const CheckBox = ({ title, checked, onUpdate }: props) => {
  return (
    <div className={cn.wrapper}>
      <label className={cn.title}>
        <input
          className={cn.checkbox}
          checked={checked}
          type="checkbox"
          onChange={onUpdate}
        />
        {title}
      </label>
    </div>
  );
};

const UserIcon = (props) => {
  return (
    <svg
      style={{ height: `${props.size}px`, width: `${props.size}px` }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 11.796C14.7189 11.796 16.9231 9.60308 16.9231 6.89801C16.9231 4.19294 14.7189 2.00005 12 2.00005C9.28106 2.00005 7.07692 4.19294 7.07692 6.89801C7.07692 9.60308 9.28106 11.796 12 11.796Z"
        fill={props.color}
        strokeWidth={props.strokeWidth}
        stroke={props.stroke}
      />
      <path
        d="M14.5641 13.8369H9.4359C6.46154 13.8369 4 16.2859 4 19.245C4 19.9593 4.30769 20.5716 4.92308 20.8777C5.84615 21.3879 7.89744 22.0001 12 22.0001C16.1026 22.0001 18.1538 21.3879 19.0769 20.8777C19.5897 20.5716 20 19.9593 20 19.245C20 16.1838 17.5385 13.8369 14.5641 13.8369Z"
        fill={props.color}
        strokeWidth={props.strokeWidth}
        stroke={props.stroke}
      />
    </svg>
  );
};

export default UserIcon;

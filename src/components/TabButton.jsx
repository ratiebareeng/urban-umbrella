export default function TabButton({ title, isSelected, ...props }) {
    return (
      <li>
        <button 
        className={isSelected ? "active" : undefined}
        {...props}
        >
            {title}
        </button>
      </li>
    );
}


// export default function TabButton({ id, title, onClick, active }) {
//   return (
//     <li>
//       <button
//         id={id}
//         onClick={onClick}
//         className={active ? 'active' : ''}
//       >
//         {title}
//       </button>
//     </li>
//   );
// }
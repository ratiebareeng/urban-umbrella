export default function TabButton({ title, onClick, isSelected }) {
    return (
      <li>
        <button 
        className={isSelected ? "active" : undefined}
        onClick={onClick}
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
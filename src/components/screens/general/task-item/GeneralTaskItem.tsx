import { motion } from 'framer-motion';
import React from 'react';
import { BsCheckSquareFill } from 'react-icons/bs';
import { IoMdCalendar } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { TTaskItem } from 'src/store/tasks/tasks.types';

import './task-item.scss';

const GeneralTaskItem: React.FC<TTaskItem> = (task) => {
  // eslint-disable-next-line object-curly-newline
  const { completed, date, description, dir, important, title } = task;
  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className="task-item" variants={child}>
      <div className="task-item__content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="task-item__content-date">
          <IoMdCalendar />
          <span>{date}</span>
        </div>
      </div>
      <div className="task-item__status">
        <BsCheckSquareFill />
        <MdCancel />
      </div>
    </motion.div>
  );
};

export { GeneralTaskItem };

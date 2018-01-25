import React from 'react';

export const Sidebar = ({
  children,
}) => (
    <aside className="row">
      <div className="col">
        {children}
      </div>
    </aside>
  );

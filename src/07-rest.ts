import { ROLES, User } from './01-enum';

const currentUser: User = {
  username: 'Edison',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

export const checkRole = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta3 = checkRole([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV3', rta3);

export const checkRoleV3 = (...roles: (string | number)[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER, 2);
console.log('checkRoleV4', rta4);

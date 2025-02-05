import { Button } from '@/components/ui/button';
import { SIDEBAR_ITEMS } from '@/lib/DashboardSidebarConfig';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '@/features/auth/authSlice';
import Cookies from 'js-cookie';

const DashboardSidebar = ({ open, setOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth();
  
  const role = user?.role || 'applicant';
  const items = SIDEBAR_ITEMS[role] || [];

  const isActive = (href) => location.pathname === href;

  // Get user display information based on role and useAuth data
  const getUserDisplayInfo = () => {
    if (!isAuthenticated || !user) {
      return { name: 'User', email: 'user@example.com', initial: 'U' };
    }

    switch (user.role) {
      case 'applicant':
        return {
          name: user.firstName,
          email: user.email,
          initial: user.firstName ? user.firstName[0].toUpperCase() : 'A'
        };
      case 'company':
        return {
          name: user.companyName,
          email: user.contactPersonEmail,
          initial: user.companyName ? user.companyName[0].toUpperCase() : 'C'
        };
      case 'admin':
        return {
          name: 'Administrator',
          email: user.email,
          initial: 'A'
        };
      default:
        return {
          name: 'User',
          email: 'user@example.com',
          initial: 'U'
        };
    }
  };

  const handleLogout = async () => {
    try {
      dispatch(logout());
      Cookies.remove('user');
      Cookies.remove('token');
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const userInfo = getUserDisplayInfo();

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DashboardSidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-center h-16 border-b bg-gray-50">
            <span className="text-xl font-semibold text-gray-800 capitalize">
              {role === 'applicant' ? 'Candidate' : role} Portal
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <div className="px-3 py-4">
              <div className="space-y-8">
                <div className="space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 ${
                        isActive(item.href)
                          ? 'bg-primary-ultra/30 text-primary-foreground'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 mr-3 ${
                        isActive(item.href) ? 'text-primary-foreground' : 'text-gray-500'
                      }`} />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Footer with User Info */}
          <div className="border-t p-4">
            <div className="space-y-4">
              {/* User Profile */}
              <div className="flex items-center space-x-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">
                    {userInfo.initial}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {userInfo.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {userInfo.email}
                  </p>
                </div>
              </div>

              {/* Logout Button */}
              <Button 
                variant="" 
                className="w-full flex items-center justify-center"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
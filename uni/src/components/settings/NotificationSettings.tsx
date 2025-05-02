type NotificationSettingsProps = {
  notifications: boolean;
  setNotifications: (notifications: boolean) => void;
};

export default function NotificationSettings({
  notifications,
  setNotifications,
}: NotificationSettingsProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Notifications</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Notification Preferences</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">Enable notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-400 peer-checked:to-orange-300"></div>
            </label>
          </div>
        </div>

        {notifications && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium mb-3">Notification Types</h4>
            <div className="space-y-3">
              {[
                "Conversion complete",
                "File ready for download",
                "Storage limit approaching",
                "New features and updates",
              ].map((notif) => (
                <div key={notif} className="flex items-center justify-between">
                  <span className="text-sm">{notif}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-400 peer-checked:to-orange-300"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


const TaxInfoSection = ({
  handleSave
}: {
  handleSave: () => void;
}) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="border-b border-gray-200 p-5">
        <h2 className="text-lg font-medium text-gray-800">Thông tin khai báo thuế</h2>
        <p className="text-sm text-gray-500">Để nhận thanh toán thông qua hệ thống Fastlance</p>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-700 mb-6">
          Để nhận thanh toán thông qua hệ thống Fastlance, freelancer phải xác nhận và đồng ý tự cung cấp thông tin thu nhập của mình để cơ quan thuế xem xét tuân thủ các yêu cầu pháp lý.
        </p>

        <ol className="mb-8 space-y-8">
          <li className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-base font-medium text-gray-800">Nhập mã số thuế</h3>
              <p className="text-sm text-gray-500 mb-2">Sau khi được xác minh, thông tin này không thể thay đổi (vui lòng liên hệ đội ngũ hỗ trợ)</p>
              <input
                type="text"
                placeholder="Vui lòng nhập thông tin"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </li>
        </ol>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxInfoSection;

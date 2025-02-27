
import PointCard from "@/components/PointCard";
import { toast } from "sonner";

const Index = () => {
  const handleClaimPoints = (title: string) => {
    toast.success(`คุณได้รับ Points จาก ${title} เรียบร้อยแล้ว`);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">ทั่วไป</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <PointCard
            title="[พิเศษ] รับ Point ฟรี ประจำวัน"
            subtitle="เหลือเวลาอีก 8 ชั่วโมง"
            points={1.00}
            onCheckPoints={() => handleClaimPoints("รับ Point ฟรี ประจำวัน")}
          />
        </div>

        <header className="my-8">
          <h1 className="text-2xl font-bold text-blue-600">สำหรับการจ้างงาน</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <PointCard
            title="ชำระเงินบน fastwork ครั้งแรก"
            points={50.00}
            onCheckPoints={() => handleClaimPoints("ชำระเงินบน fastwork ครั้งแรก")}
          />
          <PointCard
            title="จ้างงานสำเร็จครั้งแรก"
            points={100.00}
            onCheckPoints={() => handleClaimPoints("จ้างงานสำเร็จครั้งแรก")}
          />
          <PointCard
            title="จ้างงานฟรีแลนซ์รายเดิม ซ้ำมากกว่า 1 ครั้งสำเร็จ"
            points={100.00}
            onCheckPoints={() => handleClaimPoints("จ้างงานฟรีแลนซ์รายเดิม")}
          />
          <PointCard
            title="โพสต์บนบอร์ดประกาศงานสำเร็จครั้งแรก"
            points={10.00}
            onCheckPoints={() => handleClaimPoints("โพสต์บนบอร์ดประกาศงาน")}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

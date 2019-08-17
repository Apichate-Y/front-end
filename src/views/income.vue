<template>
  <v-flex class="mt-2">
    <v-container>
      <v-card max-width="auto" class="mx-auto">
        <v-card-title>รายรับ-รายจ่าย</v-card-title>
        <v-container fluid>
          <v-row align="center">
            <v-col cols="12" md="2">
              <v-text-field label="ลาดับที่" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="7">
              <v-text-field label="รายการ" outlined></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid>
          <v-row>
            <v-col class="d-flex" cols="12" sm="2">
              <v-select v-model="select" :items="Income" label="ประเภท รายรับ-รายจ่าย"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="2">
              <v-select v-model="select2" :items="items" label="ประเภท ใบเสร็จ"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="2">
              <v-select v-model="select3" :items="Status" label="สถานะ"></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field label="จานวนเงิน" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn color="primary">บันทึก</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <div>
          <v-simple-table :dense="dense" :fixed-header="fixedHeader" :height="height">
            <thead>
              <tr>
                <th class="text-left">ลาดับที่</th>
                <th class="text-left">รายการ</th>
                <th class="text-left">รายรับ-รายจ่าย</th>
                <th class="text-left">ใบเสร็จ</th>
                <th class="text-left">สถานะ</th>
                <th class="text-left">จานวนเงิน</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.list">
                <td>{{ item.list }}</td>
                <td>{{ item.expenselist }}</td>
                <td>{{ item.Income }}</td>
                <td>{{ item.items }}</td>
                <td>{{ item.Status }}</td>
                <td>{{ item.amount }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-card>
    </v-container>
  </v-flex>
</template>
<script>
export default {
  data() {
    return {
      select: "เลือก",
      Income: ["รายรับ", "รายจ่าย"],
      select2: "เลือก",
      items: [
        "อาหาร",
        "วัสดุ",
        "เครื่องเสียง",
        "อปุกรณ์สานักงาน",
        "งบประมาณ",
        "ค่าอื่นๆ"
      ],
      select3: "เลือก",
      Status: [
        "เบิกจ่ายแล้ว",
        "ยังไม่เบิกจ่าย",
        "เบิกจ่ายมัดจา",
        "เบิกงบประมาณโครงการแล้ว"
      ],
      dense: false,
      fixedHeader: false,
      height: 300,
      desserts: [
        {
          list: "1",
          expenselist: "ข้าวกล่อง 10 กล่อง",
          Income: "รายจ่าย",
          items: "อาหาร",
          Status: "เบิกจ่ายแล้ว",
          amount: 500
        },
        {
          list: "2",
          expenselist: "ลวด 5 ขน",
          Income: "รายจ่าย",
          items: "วัสดุ",
          Status: "เบิกจ่ายแล้ว",
          amount: 100
        },
        {
          list: "3",
          expenselist: "งปประมาโครงการ",
          Income: "รายรับ",
          items: "งบประมาณ",
          Status: "เบิกงบประมาณโครงการแล้ว",
          amount: 144000
        }
      ]
    };
  }
};
</script>
import { useState } from "react";
import { TextField } from "@/components/TextField";
import { Select } from "@/components/Select";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Checkbox } from "@/components/Checkbox";
import { X } from "lucide-react";
import { Menu } from "@/components/Menu";
import { MenuItem } from "@/components/Menu/MenuItem";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from "@/utils/validation";
import clsx from "clsx";
import { Button } from "@/components/Button";

export default function SignupForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreements, setAgreements] = useState({
    all: false,
    tos: false,
    privacy: false,
    marketing: false,
    sms: false,
  });
  const isPasswordValid = validatePassword(form.password);
  const isEmailValid = validateEmail(form.email);
  const isPasswordMatch = validatePasswordMatch(
    form.password,
    form.confirmPassword
  );
  const isFormValid =
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.country !== "" &&
    validateEmail(form.email) &&
    validatePassword(form.password) &&
    validatePasswordMatch(form.password, form.confirmPassword) &&
    agreements.tos &&
    agreements.privacy;
  const toggleAgreement = (key: keyof typeof agreements) => {
    const updated = { ...agreements, [key]: !agreements[key] };
    if (key === "all") {
      Object.keys(updated).forEach((k) => {
        updated[k as keyof typeof agreements] = !agreements.all;
      });
    } else {
      updated.all = Object.entries(updated)
        .filter(([k]) => k !== "all")
        .every(([_, v]) => v);
    }
    setAgreements(updated);
  };

  return (
    <div className="w-[390px] space-y-6 mb-6 ">
      <div className="flex h-14 py-4 px-5 justify-between border-b border-gray-50">
        <h1 className="text-base text-text-primary">휴대폰 번호로 가입하기</h1>
        <button className="reset-btn">
          <X size={20} />
        </button>
      </div>
      <div className="px-5 ">
        <span className="text-base text-text-primary">이름</span>
        <div className="h-2" />
        <TextField
          size="large"
          placeholder="성"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <div className="h-3 " />
        <TextField
          size="large"
          placeholder="이름"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
      </div>
      <div className="px-5 space-y-2">
        <span className="text-base text-text-primary">국적 선택</span>
        <Select
          label="나라를 선택해주세요"
          value={form.country}
          multiSelect={false}
          fillContainer={true}
          onChange={(val) => setForm({ ...form, country: val as string })}
        >
          <Menu>
            <MenuItem value="KR" label="대한민국" />
            <MenuItem value="US" label="미국" />
            <MenuItem value="JP" label="일본" />
            <MenuItem value="CN" label="중국" />
          </Menu>
        </Select>
      </div>
      <div className="px-5 space-y-2">
        <TextField
          label="이메일"
          placeholder="ex) solvook@naver.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={form.email !== "" && !isEmailValid}
        />
      </div>
      <div className="px-5 space-y-2">
        <TextField
          label="비밀번호 설정"
          placeholder="비밀번호를 입력해주세요."
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          endIcon={
            showPassword ? (
              <EyeOff size={16} onClick={() => setShowPassword(false)} />
            ) : (
              <Eye size={16} onClick={() => setShowPassword(true)} />
            )
          }
          error={form.password !== "" && !isPasswordValid}
        />
        <p
          className={clsx(
            "text-xs text-gray-500",
            form.password !== "" && !isPasswordValid && "text-status-error",
            form.password !== "" && isPasswordValid && "text-status-success"
          )}
        >
          ✔ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
        </p>
        <p
          className={clsx(
            "text-xs text-gray-500",
            form.password !== "" && !isPasswordValid && "text-status-error",
            form.password !== "" && isPasswordValid && "text-status-success"
          )}
        >
          ✔ 10자 이상 입력
        </p>
      </div>
      <div className="px-5 space-y-2">
        <TextField
          label="비밀번호 확인"
          placeholder="비밀번호를 확인해주세요."
          type={showConfirmPassword ? "text" : "password"}
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
          endIcon={
            showConfirmPassword ? (
              <EyeOff size={16} onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <Eye size={16} onClick={() => setShowConfirmPassword(true)} />
            )
          }
          error={form.confirmPassword !== "" && !isPasswordMatch}
        />
      </div>
      <div className="px-5 space-y-2">
        <span className="text-base text-text-primary">이용약관 동의</span>
        <div className="flex flex-col bg-gray-50 rounded-md py-2.5 px-3">
          <Checkbox
            label="전체동의"
            checked={agreements.all}
            onChange={() => toggleAgreement("all")}
          />
        </div>
        <div className="flex flex-col  rounded-md py-2.5 px-3">
          <Checkbox
            label="쏠북 이용약관 동의 (필수)"
            checked={agreements.tos}
            onChange={() => toggleAgreement("tos")}
          />
        </div>
        <div className="flex flex-col gap-2  rounded-md py-2.5 px-3">
          <Checkbox
            label="개인정보 수집 및 이용 동의 (필수)"
            checked={agreements.privacy}
            onChange={() => toggleAgreement("privacy")}
          />
        </div>
        <div className="flex flex-col  rounded-md py-2.5 px-3">
          <Checkbox
            label="마케팅 목적의 개인정보 수집 및 이용 동의 (선택)"
            checked={agreements.marketing}
            onChange={() => toggleAgreement("marketing")}
          />
        </div>
        <div className="flex flex-col  rounded-md py-2.5 px-3">
          <Checkbox
            label="이메일 및 SMS 등 수신 (선택)"
            checked={agreements.sms}
            onChange={() => toggleAgreement("sms")}
          />
        </div>
      </div>
      <div className="px-5">
        <Button
          size="large"
          variant="fill"
          color="primary"
          disabled={!isFormValid}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Check, Plus, Sparkles } from "lucide-react";
import { helpOptions } from "@/data/site";
import { cn } from "@/lib/utils";

interface ServiceSelectorProps {
  selectedServices: string[];
  onToggleService: (service: string) => void;
  hoveredService: string | null;
  onHoverService: (service: string | null) => void;
}

export function ServiceSelector({
  selectedServices,
  onToggleService,
  hoveredService,
  onHoverService,
}: ServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B7ED51]">
            CAPABILITIES & EXPERTISE
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F7F7]">
          How Can We Help?
        </h2>
        <p className="text-sm text-[#B4BEC1] leading-relaxed">
          Select one or more services to attach to your consultation inquiry. Our team will tailor the discussion to your exact requirements.
        </p>
      </div>

      {/* Selected counter and clear tag */}
      {selectedServices.length > 0 && (
        <div className="flex items-center justify-between rounded-xl border border-[#B7ED51]/20 bg-[#B7ED51]/5 px-3.5 py-2">
          <span className="text-xs font-medium text-[#B7ED51] flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            {selectedServices.length} {selectedServices.length === 1 ? "service" : "services"} attached to inquiry
          </span>
          <button
            type="button"
            onClick={() => {
              // Clear by toggling all active
              selectedServices.forEach((s) => onToggleService(s));
            }}
            className="text-[11px] text-[#B4BEC1] hover:text-[#F5F7F7] underline transition-colors cursor-pointer"
          >
            Reset
          </button>
        </div>
      )}

      {/* Interactive 14-service list */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {helpOptions.map((service, idx) => {
          const isSelected = selectedServices.includes(service);
          const isHovered = hoveredService === service;
          const num = String(idx + 1).padStart(2, "0");

          return (
            <button
              key={service}
              type="button"
              onClick={() => onToggleService(service)}
              onMouseEnter={() => onHoverService(service)}
              onMouseLeave={() => onHoverService(null)}
              className={cn(
                "group relative flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm transition-all duration-200 cursor-pointer border",
                isSelected
                  ? "border-[#B7ED51]/40 bg-[#B7ED51]/[0.08] text-[#F5F7F7] shadow-[0_0_20px_rgba(183,237,81,0.08)] translate-x-1"
                  : isHovered
                  ? "border-white/20 bg-white/[0.04] text-[#F5F7F7] translate-x-1"
                  : "border-white/[0.06] bg-white/[0.015] text-[#B4BEC1] hover:border-white/15 hover:bg-white/[0.03]"
              )}
            >
              {/* Left side: Number + Service Title */}
              <div className="flex items-center gap-3.5 min-w-0">
                <span
                  className={cn(
                    "font-mono text-xs font-semibold tracking-wider transition-colors",
                    isSelected
                      ? "text-[#B7ED51]"
                      : isHovered
                      ? "text-[#52BCEE]"
                      : "text-muted-foreground/60"
                  )}
                >
                  {num}
                </span>

                <span
                  className={cn(
                    "font-medium truncate transition-colors",
                    isSelected ? "text-[#F5F7F7] font-semibold" : "group-hover:text-[#F5F7F7]"
                  )}
                >
                  {service}
                </span>
              </div>

              {/* Right side: Checkbox / Plus indicator */}
              <div className="flex items-center pl-2 shrink-0">
                <div
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-md border transition-all duration-200",
                    isSelected
                      ? "border-[#B7ED51] bg-[#B7ED51] text-[#030505]"
                      : "border-white/15 bg-white/[0.03] text-muted-foreground group-hover:border-[#B7ED51]/60 group-hover:text-[#B7ED51]"
                  )}
                >
                  {isSelected ? (
                    <Check className="h-3 w-3 stroke-[3]" />
                  ) : (
                    <Plus className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                  )}
                </div>
              </div>

              {/* Active left edge line on hover or selected */}
              <div
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 rounded-r transition-all duration-200",
                  isSelected
                    ? "bg-[#B7ED51] opacity-100"
                    : isHovered
                    ? "bg-[#52BCEE] opacity-100"
                    : "opacity-0"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

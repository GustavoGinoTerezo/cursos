"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoteOneController = void 0;
const common_1 = require("@nestjs/common");
const rote_one_service_1 = require("./rote-one.service");
const create_rote_one_dto_1 = require("./dto/create-rote-one.dto");
const update_rote_one_dto_1 = require("./dto/update-rote-one.dto");
let RoteOneController = class RoteOneController {
    constructor(roteOneService) {
        this.roteOneService = roteOneService;
    }
    create(createRoteOneDto) {
        return this.roteOneService.create(createRoteOneDto);
    }
    findAll() {
        return this.roteOneService.findAll();
    }
    findOne(id) {
        return this.roteOneService.findOne(+id);
    }
    update(id, updateRoteOneDto) {
        return this.roteOneService.update(+id, updateRoteOneDto);
    }
    remove(id) {
        return this.roteOneService.remove(+id);
    }
};
exports.RoteOneController = RoteOneController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rote_one_dto_1.CreateRoteOneDto]),
    __metadata("design:returntype", void 0)
], RoteOneController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoteOneController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoteOneController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rote_one_dto_1.UpdateRoteOneDto]),
    __metadata("design:returntype", void 0)
], RoteOneController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoteOneController.prototype, "remove", null);
exports.RoteOneController = RoteOneController = __decorate([
    (0, common_1.Controller)('rote-one'),
    __metadata("design:paramtypes", [rote_one_service_1.RoteOneService])
], RoteOneController);
//# sourceMappingURL=rote-one.controller.js.map
CREATE TABLE widget (w_id VARCHAR(255) NOT NULL, w_sequence VARCHAR(255) NOT NULL, w_widget_type VARCHAR(255) NOT NULL, w_name VARCHAR(255) DEFAULT NULL, w_description LONGTEXT DEFAULT NULL, w_configuratiow_schema LONGTEXT NOT NULL COMMENT '(DC2Type:object)', w_environment VARCHAR(255) DEFAULT NULL, w_meta_data LONGTEXT NOT NULL COMMENT '(DC2Type:object)', INDEX IDX_85F91ED063BD430E (w_id), INDEX IDX_85F91ED0B6EBDA50 (w_sequence), PRIMARY KEY(w_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
